import { Component, inject } from '@angular/core';
import {
  LimitedAdditionCircleComponent
} from '../../../typography/limited-addition-circle/limited-addition-circle.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { LinkCircleComponent } from '../../../UI/links/link-circle/link-circle.component';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-hero',
  imports: [
    LimitedAdditionCircleComponent,
    ParagraphComponent,
    LinkCircleComponent
  ],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
