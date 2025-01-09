import { Component, inject } from '@angular/core';
import { InfoBadgeComponent } from '../../UI/badges/info-badge/info-badge.component';
import { InstagramIconComponent } from '../../UI/icons/socials/instagram-icon/instagram-icon.component';
import { LinkedinIconComponent } from '../../UI/icons/socials/linkedin-icon/linkedin-icon.component';
import { ViberIconComponent } from '../../UI/icons/socials/viber-icon/viber-icon.component';
import { ThemeService } from '../../theme.service';
import { applyThemeClasses } from '../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-footer',
  imports: [
    InfoBadgeComponent,
    InstagramIconComponent,
    LinkedinIconComponent,
    ViberIconComponent
  ],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
