import { Component, inject, input, OnInit, signal } from '@angular/core';
import { NavigateToLinkComponent } from '../../../UI/links/navigate-to-link/navigate-to-link.component';
import { DetailsComponent } from '../../../UI/details/details/details.component';
import { HeartIconComponent } from '../../../UI/icons/heart-icon/heart-icon.component';
import { BulkyBadgeComponent } from '../../../UI/badges/bulky-badge/bulky-badge.component';
import { StarIconComponent } from '../../../UI/icons/star-icon/star-icon.component';
import { CurrencyPipe, NgForOf, TitleCasePipe } from '@angular/common';
import { JewelryType } from '../../../../../data/JEWELRY';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewel-header',
  imports: [
    NavigateToLinkComponent,
    DetailsComponent,
    HeartIconComponent,
    BulkyBadgeComponent,
    StarIconComponent,
    NgForOf,
    CurrencyPipe,
    TitleCasePipe
  ],
  standalone: true,
  templateUrl: './jewel-header.component.html',
  styleUrl: './jewel-header.component.css'
})
export class JewelHeaderComponent implements OnInit {
  jewelDetails = input.required<JewelryType>();
  itemCounter = signal<number>(1);
  totalPrice = signal<number | null>(null);

  ngOnInit() {
    this.totalPrice.update(() => this.jewelDetails().itemDetails.price * this.itemCounter());
  }

  private router = inject(Router);

  increaseItemCount() {
    this.itemCounter.update((count) => this.jewelDetails().itemsLeft > count ? count + 1 : count);
    this.totalPrice.update(() => this.jewelDetails().itemDetails.price * this.itemCounter());
  }

  decreaseItemCount() {
    this.itemCounter.update((count) => count > 1 ? count - 1 : count);
    this.totalPrice.update(() => this.jewelDetails().itemDetails.price * this.itemCounter());
  }

  getLinkData() {
    const jewelHeading = signal(this.jewelDetails()?.itemDetails.heading || '');
    const jewelId = signal(this.jewelDetails()?.id || '');
    return {
      jewelHeading: jewelHeading() ? jewelHeading() + ` .` : ``,
      jewelUrl: [`/jewelry`, `${jewelId()}`]
    };
  }

  get getButtonExtraStyles() {
    return this.jewelDetails().itemsLeft === 0 ? ' text-zinc-500 border-zinc-500' :
      ' text-yellow-700 border-yellow-700';
  }

  get getRatingArray() {
    if (this.jewelDetails) {
      const filledStars = Math.floor(this.jewelDetails().itemDetails.rating);
      const emptyStars = 5 - filledStars;
      return [
        ...Array(filledStars).fill(`filled`),
        ...Array(emptyStars).fill('empty')
      ];
    } else {
      this.router.navigate([`/`]).then();
      return;
    }
  }
}
