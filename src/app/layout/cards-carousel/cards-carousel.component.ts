import { Component } from '@angular/core';
import { ItemCardComponent } from '../../UI/cards/item-card/item-card.component';

@Component({
  selector: 'app-cards-carousel',
  imports: [ItemCardComponent],
  standalone: true,
  templateUrl: './cards-carousel.component.html',
  styleUrl: './cards-carousel.component.css'
})
export class CardsCarouselComponent {

}
