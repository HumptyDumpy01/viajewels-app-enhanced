import { Component, inject } from '@angular/core';
import { CardsCarouselComponent } from '../cards-carousel/cards-carousel.component';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { JewelryService } from '../../jewelry.service';

@Component({
  selector: 'app-recent-searches',
  imports: [
    CardsCarouselComponent,
    HeadingComponent
  ],
  standalone: true,
  templateUrl: './recent-searches.component.html',
  styleUrl: './recent-searches.component.css'
})
export class RecentSearchesComponent {
  private jewelryService = inject(JewelryService);

  get recentSearches() {
    return this.jewelryService.getJewelry();
  }

}
