import { Component, inject, OnInit, signal } from '@angular/core';
import { JewelryService } from '../../../jewelry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigateToLinkComponent } from '../../../UI/links/navigate-to-link/navigate-to-link.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { CurrencyPipe } from '@angular/common';
import { MinifiedItemCardsComponent } from '../../../layout/minified-item-cards/minified-item-cards.component';

@Component({
  selector: 'app-check-out-header',
  imports: [
    NavigateToLinkComponent,
    ParagraphComponent,
    CurrencyPipe,
    MinifiedItemCardsComponent
  ],
  standalone: true,
  templateUrl: './check-out-header.component.html',
  styleUrl: './check-out-header.component.css'
})
export class CheckOutHeaderComponent implements OnInit {
  private jewelryService = inject(JewelryService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id = signal(this.route.snapshot.params['id']);

  totalPrice = signal<number | null>(null);

  itemCounter = signal<number>(1);

  getItems() {
    return this.jewelryService.getJewelry().filter((jewel) => jewel.addedToWishlist).slice(0, 3);
  }

  ngOnInit() {
    this.totalPrice.update(() => this.jewelDetails!.itemDetails.price * this.itemCounter());
  }

  get jewelDetails() {
    const jewel = this.jewelryService.getJewel(Number(this.id()));
    if (!jewel) {
      this.router.navigate([`/`]).then();
    }
    return jewel;
  }

  getLinkData() {
    const jewelHeading = signal(this.jewelDetails?.itemDetails.heading || '');
    const jewelId = signal(this.jewelDetails?.id || '');
    return {
      jewelHeading: jewelHeading() ? jewelHeading() + ` .` : ``,
      jewelUrl: [`/jewelry`, `${jewelId()}`]
    };
  }

  increaseItemCount() {
    this.itemCounter.update((count) => this.jewelDetails!.itemsLeft > count ? count + 1 : count);
    this.totalPrice.update(() => this.jewelDetails!.itemDetails.price * this.itemCounter());
  }

  decreaseItemCount() {
    this.itemCounter.update((count) => count > 1 ? count - 1 : count);
    this.totalPrice.update(() => this.jewelDetails!.itemDetails.price * this.itemCounter());
  }

  get getButtonExtraStyles() {
    return this.jewelDetails?.itemsLeft === 0 ? ' text-zinc-500 border-zinc-500' :
      ' text-yellow-700 border-yellow-700';
  }
}
