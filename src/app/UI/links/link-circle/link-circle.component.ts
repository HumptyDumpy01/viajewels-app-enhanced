import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkTargetType } from '../../../../utils/generic-types/link.target.type';
import { ThemeService } from '../../../theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-link-circle',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './link-circle.component.html',
  styleUrl: './link-circle.component.css'
})
export class LinkCircleComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  routerLinkHref = input.required<string[]>();
  queryParams = input<{ [k: string]: any }>({});
  linkTarget = input<LinkTargetType>('_self');
  customClasses = input<string>('');
  protected readonly applyThemeClasses = applyThemeClasses;
}
