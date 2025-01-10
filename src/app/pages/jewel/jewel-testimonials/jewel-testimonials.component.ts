import { ChangeDetectorRef, Component, inject, input, signal } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { TestimonialsComponent } from '../../../layout/testimonials/testimonials.component';
import { JewelryReviewType } from '../../../../../data/JEWELRY';
import { BulkyBadgeComponent } from '../../../UI/badges/bulky-badge/bulky-badge.component';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../../theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-jewel-testimonials',
  imports: [
    HeadingComponent,
    TestimonialsComponent,
    BulkyBadgeComponent,
    NgIf
  ],
  standalone: true,
  templateUrl: './jewel-testimonials.component.html',
  styleUrl: './jewel-testimonials.component.css'
})
export class JewelTestimonialsComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  jewelReviews = input.required<JewelryReviewType[]>();
  filterBy = signal<FilterTestimonialsType>(`top-rated`);
  private cdr = inject(ChangeDetectorRef);

  switchFilter(filter: FilterTestimonialsType) {
    this.filterBy.set(filter);
    this.cdr.detectChanges();
  }

  get filteredReviews() {
    switch (this.filterBy()) {
      case `top-rated`:
        return this.jewelReviews().sort((a, b) => b.rated - a.rated);
      case `new`:
        return this.jewelReviews().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case `old`:
        return this.jewelReviews().sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }
  }


  protected readonly applyThemeClasses = applyThemeClasses;
}

export type FilterTestimonialsType = `top-rated` | `new` | `old`;
