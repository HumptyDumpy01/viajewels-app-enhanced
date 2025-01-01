import { Component, input } from '@angular/core';
import { CardModeType, ItemCardComponent } from '../../UI/cards/item-card/item-card.component';
import { JewelryType } from '../../../../data/JEWELRY';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-cards-carousel',
  imports: [ItemCardComponent, NgForOf, NgIf],
  standalone: true,
  templateUrl: './cards-carousel.component.html',
  styleUrl: './cards-carousel.component.css'
})
export class CardsCarouselComponent {
  jewelry = input.required<JewelryType[]>();
  cardMode = input<CardModeType>(`black`);
}
