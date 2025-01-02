import { Component, input } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { TestimonialsComponent } from '../../../layout/testimonials/testimonials.component';
import { JewelryReviewType } from '../../../../../data/JEWELRY';

@Component({
  selector: 'app-customer-testimonials',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    TestimonialsComponent
  ],
  standalone: true,
  templateUrl: './customer-testimonials.component.html',
  styleUrl: './customer-testimonials.component.css'
})
export class CustomerTestimonialsComponent {
  testimonials = input.required<JewelryReviewType[]>();
}
