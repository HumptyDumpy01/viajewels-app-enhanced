import { Component, inject, input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { applyThemeClasses } from '../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-heading',
  imports: [],
  standalone: true,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  customContainerClasses = input<string>();
  span = input.required<string>();
  spanColor = input<string | null>(null);
  mode = input<modeType>(`light`);

  headingColorLight = input(`text-zinc-800`);

  get spanStyles() {
    const lightStyles = `text-amber-600`;
    const darkStyles = `text-amber-500`;

    return this.spanColor() ? this.spanColor() : this.mode() === `dark` ? darkStyles : lightStyles;
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}

type modeType = `dark` | `light`;
