import { Component, inject, input } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { TestimonialsComponent } from '../../../layout/testimonials/testimonials.component';
import { JewelryReviewType } from '../../../../../data/JEWELRY';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

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
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  testimonials = input.required<JewelryReviewType[]>();
  protected readonly applyThemeClasses = applyThemeClasses;
}
