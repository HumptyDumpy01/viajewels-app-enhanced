import { Component } from '@angular/core';
import { NavigateToLinkComponent } from '../../../UI/links/navigate-to-link/navigate-to-link.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { ItemCardComponent } from '../../../UI/cards/item-card/item-card.component';

@Component({
  selector: 'app-search-jewelry-header',
  imports: [
    NavigateToLinkComponent,
    ParagraphComponent,
    ItemCardComponent
  ],
  standalone: true,
  templateUrl: './search-jewelry-header.component.html',
  styleUrl: './search-jewelry-header.component.css'
})
export class SearchJewelryHeaderComponent {

}
