import { Component, input } from '@angular/core';
import { ItemCardComponent } from '../../UI/cards/item-card/item-card.component';
import { JewelryType } from '../../../../data/JEWELRY';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-minified-item-cards',
  imports: [
    ItemCardComponent,
    NgForOf
  ],
  standalone: true,
  templateUrl: './minified-item-cards.component.html',
  styleUrl: './minified-item-cards.component.css'
})
export class MinifiedItemCardsComponent {
  items = input.required<JewelryType[]>();
}
