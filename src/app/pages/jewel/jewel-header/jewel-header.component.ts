import { Component, inject, input, signal } from '@angular/core';
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
export class JewelHeaderComponent {
  jewelDetails = input.required<JewelryType>();
  private router = inject(Router);

  getLinkData() {
    const jewelHeading = signal(this.jewelDetails()?.itemDetails.heading || '');
    const jewelId = signal(this.jewelDetails()?.id || '');
    return {
      jewelHeading: jewelHeading() ? jewelHeading() + ` .` : ``,
      jewelUrl: [`/jewelry`, `${jewelId()}`]
    };
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
