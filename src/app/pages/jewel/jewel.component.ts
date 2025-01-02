import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JewelryService } from '../../jewelry.service';
import { NavigateToLinkComponent } from '../../UI/links/navigate-to-link/navigate-to-link.component';
import { Router } from '@angular/router';
import { CurrencyPipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { StarIconComponent } from '../../UI/icons/star-icon/star-icon.component';
import { InfoBadgeComponent } from '../../UI/badges/info-badge/info-badge.component';
import { BulkyBadgeComponent } from '../../UI/badges/bulky-badge/bulky-badge.component';
import { HeartIconComponent } from '../../UI/icons/heart-icon/heart-icon.component';
import { DetailsComponent } from '../../UI/details/details/details.component';
import { JewelHeaderComponent } from './jewel-header/jewel-header.component';

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
    BulkyBadgeComponent,
    HeartIconComponent,
    DetailsComponent,
    JewelHeaderComponent
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



  ngOnInit() {
    window.scrollTo(0, 0);

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
