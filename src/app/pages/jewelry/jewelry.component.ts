import { Component, OnInit } from '@angular/core';
import { SearchJewelryHeaderComponent } from './search-jewelry-header/search-jewelry-header.component';
import { FilterJewelryComponent } from './filter-jewelry/filter-jewelry.component';
import { CardsCarouselComponent } from '../../layout/cards-carousel/cards-carousel.component';
import { JewelryItemsComponent } from './jewelry-items/jewelry-items.component';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';

@Component({
  selector: 'app-jewelry',
  imports: [
    SearchJewelryHeaderComponent,
    FilterJewelryComponent,
    CardsCarouselComponent,
    JewelryItemsComponent,
    HeadingComponent,
    RecentSearchesComponent
  ],
  standalone: true,
  templateUrl: './jewelry.component.html',
  styleUrl: './jewelry.component.css'
})
export class JewelryComponent implements OnInit {

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);
  }

}
