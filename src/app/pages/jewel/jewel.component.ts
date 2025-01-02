import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JewelryService } from '../../jewelry.service';
import { NavigateToLinkComponent } from '../../UI/links/navigate-to-link/navigate-to-link.component';
import { Router } from '@angular/router';
import { CurrencyPipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { StarIconComponent } from '../../UI/icons/star-icon/star-icon.component';
import { InfoBadgeComponent } from '../../UI/badges/info-badge/info-badge.component';
import { BulkyBadgeComponent } from '../../UI/badges/bulky-badge/bulky-badge.component';

@Component({
  selector: 'app-jewel',
  imports: [
    NavigateToLinkComponent,
    NgIf,
    NgForOf,
    TitleCasePipe,
    UpperCasePipe,
    StarIconComponent,
    CurrencyPipe,
    InfoBadgeComponent,
    BulkyBadgeComponent
  ],
  standalone: true,
  templateUrl: './jewel.component.html',
  styleUrl: './jewel.component.css'
})
export class JewelComponent implements OnInit {
  id = input<string>();
  private titleService = inject(Title);
  private jewelryService = inject(JewelryService);
  private router = inject(Router);

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

  get getRatingArray() {
    if (this.jewelDetails) {
      const filledStars = Math.floor(this.jewelDetails.itemDetails.rating);
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

  ngOnInit() {
    if (this.id()) {
      const jewel = this.jewelryService.getJewel(Number(this.id()));
      if (jewel) {
        this.titleService.setTitle(`ViaJewels: Jewel ${jewel?.itemDetails.heading}`);
        return;
      } else {
        this.router.navigate([`/`]).then();
      }
    } else {
      this.router.navigate([`/`]).then();
    }
  }

}
