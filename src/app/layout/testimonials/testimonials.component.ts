import { Component, input } from '@angular/core';
import { TestimonialsCardComponent } from '../../UI/cards/testimonials-card/testimonials-card.component';
import { ViajewelsButtonComponent } from '../../UI/buttons/viajewels-button/viajewels-button.component';
import { NgForOf, NgIf } from '@angular/common';
import { JewelryReviewType } from '../../../../data/JEWELRY';

@Component({
  selector: 'app-testimonials',
  imports: [
    TestimonialsCardComponent,
    ViajewelsButtonComponent,
    NgForOf,
    NgIf
  ],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = input.required<JewelryReviewType[]>();
  paginationVariation = input<PaginationVariationType>(`see-more-btn`);
}

type PaginationVariationType = `circles` | `see-more-btn`
