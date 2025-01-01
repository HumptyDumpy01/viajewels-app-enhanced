import { Component, inject, OnInit } from '@angular/core';
import { SearchJewelryHeaderComponent } from './search-jewelry-header/search-jewelry-header.component';
import { FilterJewelryComponent } from './filter-jewelry/filter-jewelry.component';
import { JewelryItemsComponent } from './jewelry-items/jewelry-items.component';
import { RecentSearchesComponent } from '../../layout/recent-searches/recent-searches.component';
import { JewelryService } from '../../jewelry.service';

@Component({
  selector: 'app-jewelry',
  imports: [
    SearchJewelryHeaderComponent,
    FilterJewelryComponent,
    JewelryItemsComponent,
    RecentSearchesComponent
  ],
  standalone: true,
  templateUrl: './jewelry.component.html',
  styleUrl: './jewelry.component.css'
})
export class JewelryComponent implements OnInit {
  private jewelryService = inject(JewelryService);


  get jewelryItems() {
    return this.jewelryService.getJewelry();
  }

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);
  }

}
