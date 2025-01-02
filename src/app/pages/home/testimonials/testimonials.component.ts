import { Component, computed, inject } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { TestimonialsCardComponent } from '../../../UI/cards/testimonials-card/testimonials-card.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { JewelryService } from '../../../jewelry.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [
    HeadingComponent,
    ParagraphComponent,
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
  private jewelryService = inject(JewelryService);

  testimonialData = computed(() => this.jewelryService.getJewelry().filter((j) =>
    j.reviews!.length > 0));

  get getTestimonials() {
    // gather all reviews onto a single array and return it
    const reviews = this.testimonialData().map((j) => j.reviews).flat()
      .filter((r) => r!.rated >= 4).slice(0, 4);

    return reviews!;
  }
}
