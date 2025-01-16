import { Component, EventEmitter, inject, input, OnInit, Output, signal } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ImgDataType } from '../collection-card/collection-card.component';
import { TrimTextPipe } from '../../../pipes/trim-text.pipe';
import { CartService } from '../../../services/cart.service';
import { JewelryType } from '../../../../../data/JEWELRY';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-detail-card',
  imports: [
    CurrencyPipe,
    TrimTextPipe,
    NgClass,
    RouterLink
  ],
  standalone: true,
  templateUrl: './order-detail-card.component.html',
  styleUrl: './order-detail-card.component.css'
})
export class OrderDetailCardComponent implements OnInit {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  private cartService = inject(CartService);
  itemCounter = signal<number>(1);
  totalPrice = signal<number | null>(null);
  imgData = input.required<ImgDataType>();
  heading = input.required<string>();
  text = input.required<string>();
  item = input.required<JewelryType>();
  enableButtons = input<boolean>(true);

  @Output() totalPriceChange = new EventEmitter<number>();
  @Output() itemCounterChange = new EventEmitter<number>();

  ngOnInit() {
    const cartItem = this.cartService.getCart().find((cartItem) => cartItem.jewel.id === this.item().id);
    if (cartItem) {
      this.itemCounter.update(() => cartItem.count);
    }
    this.updateTotalPrice();
  }

  jewelDetails = input.required<{ itemsLeft: number; itemPrice: number }>();
  href = input.required<string>();

  increaseItemCount() {
    const oldTotalPrice = this.totalPrice();
    this.itemCounter.update((count) => this.jewelDetails().itemsLeft > count ? count + 1 : count);
    this.updateTotalPrice(oldTotalPrice);
    this.itemCounterChange.emit(this.itemCounter());
    this.cartService.increaseItemCount(this.item());
  }

  decreaseItemCount() {
    const oldTotalPrice = this.totalPrice();
    this.itemCounter.update((count) => count > 1 ? count - 1 : count);
    this.updateTotalPrice(oldTotalPrice);
    this.itemCounterChange.emit(this.itemCounter());
    this.cartService.decreaseItemCount(this.item());
  }

  private updateTotalPrice(oldTotalPrice: number | null = null) {
    const newTotalPrice = this.jewelDetails().itemPrice * this.itemCounter();
    this.totalPrice.update(() => newTotalPrice);
    if (oldTotalPrice !== null) {
      this.totalPriceChange.emit(newTotalPrice - oldTotalPrice);
    } else {
      this.totalPriceChange.emit(newTotalPrice);
    }
  }

  get getButtonExtraStyles() {
    return this.jewelDetails().itemsLeft === 0 ? ' text-zinc-500 border-zinc-500 hover:bg-zinc-500 hover:text-white' :
      ' text-yellow-700 border-yellow-700 hover:bg-yellow-700 hover:text-white';
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
