import { Component, inject, signal } from '@angular/core';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { StarIconComponent } from '../../../UI/icons/star-icon/star-icon.component';
import { BulkyBadgeComponent } from '../../../UI/badges/bulky-badge/bulky-badge.component';
import { RedBulkyButtonComponent } from '../../../UI/buttons/red-bulky-button/red-bulky-button.component';
import { JewelryService } from '../../../jewelry.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-filter-jewelry',
  imports: [
    InputControlComponent,
    StarIconComponent,
    BulkyBadgeComponent,
    RedBulkyButtonComponent,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './filter-jewelry.component.html',
  styleUrl: './filter-jewelry.component.css'
})
export class FilterJewelryComponent {
  private jewelryService = inject(JewelryService);
  activeCategory = signal<ActiveCategoryType>(`all`);
  activeRating = signal<number>(4);

  switchCategory(category: ActiveCategoryType) {
    this.activeCategory.set(category);
  }

  switchRating(rating: number) {
    this.activeRating.set(rating);
  }

  handleClearFilter() {
    this.activeCategory.set(`all`);
  }

  get highestPrice() {
    return this.jewelryService.highestPrice;
  }
}

export type ActiveCategoryType = `bracelets` | `necklaces` | `rings` | `earrings` | `all`;
