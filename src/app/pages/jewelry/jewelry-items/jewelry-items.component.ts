import { Component } from '@angular/core';
import { ItemCardComponent } from '../../../UI/cards/item-card/item-card.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';

@Component({
  selector: 'app-jewelry-items',
  imports: [
    ItemCardComponent,
    ViajewelsButtonComponent
  ],
  standalone: true,
  templateUrl: './jewelry-items.component.html',
  styleUrl: './jewelry-items.component.css'
})
export class JewelryItemsComponent {

}
