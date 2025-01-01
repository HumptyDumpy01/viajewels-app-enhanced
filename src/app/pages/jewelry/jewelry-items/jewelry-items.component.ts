import { Component, input } from '@angular/core';
import { ItemCardComponent } from '../../../UI/cards/item-card/item-card.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { JewelryType } from '../../../../../data/JEWELRY';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-jewelry-items',
  imports: [
    ItemCardComponent,
    ViajewelsButtonComponent,
    NgForOf,
    NgIf
  ],
  standalone: true,
  templateUrl: './jewelry-items.component.html',
  styleUrl: './jewelry-items.component.css'
})
export class JewelryItemsComponent {
  jewelry = input.required<JewelryType[]>();
}
