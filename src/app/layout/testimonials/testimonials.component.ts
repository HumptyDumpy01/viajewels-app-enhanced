import { Component, input, signal } from '@angular/core';
import { TestimonialsCardComponent } from '../../UI/cards/testimonials-card/testimonials-card.component';
import { ViajewelsButtonComponent } from '../../UI/buttons/viajewels-button/viajewels-button.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { JewelryReviewType } from '../../../../data/JEWELRY';
import { scrollToTag } from '../../../utils/functions/scrollToTag';

@Component({
  selector: 'app-testimonials',
  imports: [
    TestimonialsCardComponent,
    ViajewelsButtonComponent,
    NgForOf,
    NgIf,
    NgClass
  ],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  currentPage = signal(1);
  scrollToTagIdentifier = input<string>(`.testimonials-heading`);

  testimonialsPerPage = 4;
  totalTestimonialsToShow = signal(this.testimonialsPerPage);

  testimonials = input.required<JewelryReviewType[]>();
  paginationVariation = input<PaginationVariationType>(`see-more-btn`);

  generatePaginationButtons() {
    const totalPages = Math.ceil(this.testimonials().length / this.testimonialsPerPage);
    const currentPage = this.currentPage();
    const buttons = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      buttons.push(1);
      if (currentPage > 3) {
        buttons.push('...');
      }
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        buttons.push(i);
      }
      if (currentPage < totalPages - 2) {
        buttons.push('...');
      }
      buttons.push(totalPages);
    }

    return buttons;
  }

  get paginatedTestimonials() {
    if (this.paginationVariation() === 'see-more-btn') {
      return this.testimonials().slice(0, this.totalTestimonialsToShow());
    } else {
      const startIndex = (this.currentPage() - 1) * this.testimonialsPerPage;
      return this.testimonials().slice(startIndex, startIndex + this.testimonialsPerPage);
    }
  }

  nextPage() {
    if (this.paginationVariation() === 'see-more-btn') {
      const newTotal = this.totalTestimonialsToShow() + this.testimonialsPerPage;
      if (newTotal <= this.testimonials().length) {
        this.totalTestimonialsToShow.set(newTotal);
      } else {
        this.totalTestimonialsToShow.set(this.testimonials().length);
      }
    }
  }

  setPage(page: number) {
    this.currentPage.set(page);
  }

  setTestimonialsToDefault() {
    this.totalTestimonialsToShow.set(this.testimonialsPerPage);
    this.currentPage.set(1);
    //scroll to testimonials-heading class
    scrollToTag(this.scrollToTagIdentifier());
  }
}

type PaginationVariationType = `circles` | `see-more-btn`
