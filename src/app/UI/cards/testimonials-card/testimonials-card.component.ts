import { Component, input } from '@angular/core';
import { StarIconComponent } from '../../icons/star-icon/star-icon.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { NgForOf } from '@angular/common';
import { AbbrInitialsPipe } from '../../../abbr-initials.pipe';
import { TrimTextPipe } from '../../../trim-text.pipe';

@Component({
  selector: 'app-testimonials-card',
  imports: [
    StarIconComponent,
    ParagraphComponent,
    NgForOf,
    AbbrInitialsPipe,
    TrimTextPipe
  ],
  standalone: true,
  templateUrl: './testimonials-card.component.html',
  styleUrl: './testimonials-card.component.css'
})
export class TestimonialsCardComponent {
  initials = input.required<string>();
  review = input.required<string>();
  rating = input.required<number>();

  // if e.g. rating is 4.5, we want to create an array of 4 elements
  get getRatingArray() {
    const filledStars = Math.floor(this.rating());
    const emptyStars = 5 - filledStars;
    return [
      ...Array(filledStars).fill('filled'),
      ...Array(emptyStars).fill('empty')
    ];
  }

  get firstLetterOfText() {
    return this.review()[0];
  }

  get restOfText() {
    return this.review().slice(1);
  }

}
