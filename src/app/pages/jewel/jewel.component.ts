import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JewelryService } from '../../jewelry.service';
import { NavigateToLinkComponent } from '../../UI/links/navigate-to-link/navigate-to-link.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewel',
  imports: [
    NavigateToLinkComponent
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
