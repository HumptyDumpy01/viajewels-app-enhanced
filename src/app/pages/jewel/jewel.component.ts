import { Component, inject, input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JewelryService } from '../../jewelry.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { JewelHeaderComponent } from './jewel-header/jewel-header.component';
import { JewelTestimonialsComponent } from './jewel-testimonials/jewel-testimonials.component';
import { LeaveReviewComponent } from './leave-review/leave-review.component';

@Component({
  selector: 'app-jewel',
  imports: [
    NgIf,
    JewelHeaderComponent,
    JewelTestimonialsComponent,
    LeaveReviewComponent
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
