import { Component } from '@angular/core';
import { ItemCardComponent } from '../../UI/cards/item-card/item-card.component';
import {
  LimitedAdditionCircleComponent
} from '../../typography/limited-addition-circle/limited-addition-circle.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { StarIconComponent } from '../../UI/icons/star-icon/star-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards-carousel',
  imports: [ItemCardComponent, LimitedAdditionCircleComponent, ParagraphComponent, StarIconComponent, RouterLink],
  standalone: true,
  templateUrl: './cards-carousel.component.html',
  styleUrl: './cards-carousel.component.css'
})
export class CardsCarouselComponent {

}
