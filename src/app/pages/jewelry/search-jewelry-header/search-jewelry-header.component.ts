import { Component, inject, input } from '@angular/core';
import { NavigateToLinkComponent } from '../../../UI/links/navigate-to-link/navigate-to-link.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { MinifiedItemCardsComponent } from '../../../layout/minified-item-cards/minified-item-cards.component';
import { JewelryType } from '../../../../../data/JEWELRY';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-search-jewelry-header',
  imports: [
    NavigateToLinkComponent,
    ParagraphComponent,
    MinifiedItemCardsComponent
  ],
  standalone: true,
  templateUrl: './search-jewelry-header.component.html',
  styleUrl: './search-jewelry-header.component.css'
})
export class SearchJewelryHeaderComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  suggestedItems = input.required<JewelryType[]>();
  protected readonly applyThemeClasses = applyThemeClasses;
}
