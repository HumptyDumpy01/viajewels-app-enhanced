import { Component, input } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { TestimonialsComponent } from '../../../layout/testimonials/testimonials.component';
import { JewelryReviewType } from '../../../../../data/JEWELRY';
import { BulkyBadgeComponent } from '../../../UI/badges/bulky-badge/bulky-badge.component';

@Component({
  selector: 'app-jewel-testimonials',
  imports: [
    HeadingComponent,
    TestimonialsComponent,
    BulkyBadgeComponent
  ],
  standalone: true,
  templateUrl: './jewel-testimonials.component.html',
  styleUrl: './jewel-testimonials.component.css'
})
export class JewelTestimonialsComponent {
  jewelReviews = input.required<JewelryReviewType[]>();
}
