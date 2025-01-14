import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-loading-paragraph',
  imports: [],
  standalone: true,
  templateUrl: './loading-paragraph.component.html',
  styleUrl: './loading-paragraph.component.css'
})
export class LoadingParagraphComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
