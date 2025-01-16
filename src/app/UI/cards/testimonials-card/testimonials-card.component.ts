import { Component, computed, inject, input } from '@angular/core';
import { StarIconComponent } from '../../icons/star-icon/star-icon.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { DatePipe, NgForOf } from '@angular/common';
import { AbbrInitialsPipe } from '../../../pipes/abbr-initials.pipe';
import { TrimTextPipe } from '../../../pipes/trim-text.pipe';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-testimonials-card',
  imports: [
    StarIconComponent,
    ParagraphComponent,
    NgForOf,
    AbbrInitialsPipe,
    TrimTextPipe,
    DatePipe
  ],
  standalone: true,
  templateUrl: './testimonials-card.component.html',
  styleUrl: './testimonials-card.component.css'
})
export class TestimonialsCardComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  initials = input.required<string>();
  review = input.required<string>();
  rating = input.required<number>();
  createdAt = input.required<string>();

  themeStarFilling = computed(() => this.theme === 'light' ? 'filled' : 'darkFilled');

  // if e.g. rating is 4.5, we want to create an array of 4 elements
  get getRatingArray() {
    const filledStars = Math.floor(this.rating());
    const emptyStars = 5 - filledStars;
    return [
      ...Array(filledStars).fill(this.themeStarFilling()),
      ...Array(emptyStars).fill('empty')
    ];
  }

  get firstLetterOfText() {
    return this.review()[0];
  }

  get restOfText() {
    return this.review().slice(1);
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
