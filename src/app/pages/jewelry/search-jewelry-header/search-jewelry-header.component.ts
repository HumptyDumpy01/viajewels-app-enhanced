import { Component, input } from '@angular/core';
import { NavigateToLinkComponent } from '../../../UI/links/navigate-to-link/navigate-to-link.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { ItemCardComponent } from '../../../UI/cards/item-card/item-card.component';
import { MinifiedItemCardsComponent } from '../../../layout/minified-item-cards/minified-item-cards.component';
import { JewelryType } from '../../../../../data/JEWELRY';

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
  suggestedItems = input.required<JewelryType[]>();
}
