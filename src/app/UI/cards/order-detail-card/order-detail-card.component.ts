import { Component, input, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ImgDataType } from '../collection-card/collection-card.component';
import { TrimTextPipe } from '../../../trim-text.pipe';

@Component({
  selector: 'app-order-detail-card',
  imports: [
    CurrencyPipe,
    TrimTextPipe
  ],
  standalone: true,
  templateUrl: './order-detail-card.component.html',
  styleUrl: './order-detail-card.component.css'
})
export class OrderDetailCardComponent implements OnInit {
  itemCounter = signal<number>(1);
  totalPrice = signal<number | null>(null);
  imgData = input.required<ImgDataType>();
  heading = input.required<string>();
  text = input.required<string>();

  ngOnInit() {
    this.totalPrice.update(() => this.jewelDetails().itemPrice * this.itemCounter());
  }

  jewelDetails = input.required<{ itemsLeft: number; itemPrice: number }>();

  increaseItemCount() {
    this.itemCounter.update((count) => this.jewelDetails().itemsLeft > count ? count + 1 : count);
    this.totalPrice.update(() => this.jewelDetails().itemPrice * this.itemCounter());
  }

  decreaseItemCount() {
    this.itemCounter.update((count) => count > 1 ? count - 1 : count);
    this.totalPrice.update(() => this.jewelDetails().itemPrice * this.itemCounter());
  }

  get getButtonExtraStyles() {
    return this.jewelDetails().itemsLeft === 0 ? ' text-zinc-500 border-zinc-500' :
      ' text-yellow-700 border-yellow-700';
  }
}
