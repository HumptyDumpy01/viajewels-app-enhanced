import { Component, inject } from '@angular/core';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { CircularBadgeComponent } from '../../../UI/badges/circular-badge/circular-badge.component';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-why-us',
  imports: [
    ParagraphComponent,
    CircularBadgeComponent,
    HeadingComponent
  ],
  standalone: true,
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
