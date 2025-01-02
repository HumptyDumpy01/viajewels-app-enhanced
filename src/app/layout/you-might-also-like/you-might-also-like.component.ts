import { Component, inject, input } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { CardsCarouselComponent } from '../cards-carousel/cards-carousel.component';
import { JewelryService } from '../../jewelry.service';

@Component({
  selector: 'app-you-might-also-like',
  imports: [
    HeadingComponent,
    CardsCarouselComponent
  ],
  standalone: true,
  templateUrl: './you-might-also-like.component.html',
  styleUrl: './you-might-also-like.component.css'
})
export class YouMightAlsoLikeComponent {
  private jewelryService = inject(JewelryService);
  currentJewelryId = input.required<number>();

  get jewelry() {
    return this.jewelryService.getJewelry().filter(jewel => jewel.id !== this.currentJewelryId());
  }
}
