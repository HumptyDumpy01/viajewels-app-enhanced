import { Component, inject, input } from '@angular/core';
import { CardsCarouselComponent } from '../cards-carousel/cards-carousel.component';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { RecentSearchesService } from '../../recent-searches.service';

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
  private recentSearchesService = inject(RecentSearchesService);
  messageIfNoItems = input<string>(`You haven't browsed for anything yet! Let's change it :)`);

  get recentSearches() {
    return this.recentSearchesService.getRecentSearches;
  }

}
