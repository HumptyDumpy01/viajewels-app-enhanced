import { Component, inject, OnInit, signal } from '@angular/core';
import { SearchJewelryHeaderComponent } from './search-jewelry-header/search-jewelry-header.component';
import { FilterJewelryComponent } from './filter-jewelry/filter-jewelry.component';
import { JewelryItemsComponent } from '../../layout/jewelry-items/jewelry-items.component';
import { RecentSearchesComponent } from '../../layout/recent-searches/recent-searches.component';
import { FiltersType, JewelryService } from '../../jewelry.service';
import {
  SubscribeOntoNewsletterComponent
} from '../../layout/subscribe-onto-newsletter/subscribe-onto-newsletter.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jewelry',
  imports: [
    SearchJewelryHeaderComponent,
    FilterJewelryComponent,
    JewelryItemsComponent,
    RecentSearchesComponent,
    SubscribeOntoNewsletterComponent
  ],
  standalone: true,
  templateUrl: './jewelry.component.html',
  styleUrl: './jewelry.component.css'
})
export class JewelryComponent implements OnInit {
  private jewelryService = inject(JewelryService);
  private route = inject(ActivatedRoute);

  filterOptions = signal<FiltersType>({
    searchTerm: null,
    category: null,
    rating: null,
    price: null
  });

  get jewelryItems() {
    return this.jewelryService.getJewelry(this.filterOptions());
  }

  changeFilterOptions(filters: FiltersType) {
    this.filterOptions.set({ ...this.filterOptions(), ...filters });
  }

  get suggestedItems() {
    return this.jewelryService.newestJewelry;
  }

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);

    this.route.queryParams.subscribe((params) => {
      const category = params[`category`];
      if (category) {
        this.changeFilterOptions({ ...this.filterOptions(), category: category });
      }
    });

  }
}
