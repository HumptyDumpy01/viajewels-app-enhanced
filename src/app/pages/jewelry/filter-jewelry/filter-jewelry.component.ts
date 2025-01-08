import { Component, EventEmitter, inject, Output, signal, ViewChild } from '@angular/core';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { StarIconComponent } from '../../../UI/icons/star-icon/star-icon.component';
import { BulkyBadgeComponent } from '../../../UI/badges/bulky-badge/bulky-badge.component';
import { RedBulkyButtonComponent } from '../../../UI/buttons/red-bulky-button/red-bulky-button.component';
import { FiltersType, JewelryService } from '../../../jewelry.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-jewelry',
  imports: [
    InputControlComponent,
    StarIconComponent,
    BulkyBadgeComponent,
    RedBulkyButtonComponent,
    CurrencyPipe,
    FormsModule
  ],
  standalone: true,
  templateUrl: './filter-jewelry.component.html',
  styleUrl: './filter-jewelry.component.css'
})
export class FilterJewelryComponent {
  private jewelryService = inject(JewelryService);
  activeCategory = signal<ActiveCategoryType>('all');
  activeRating = signal<number>(4);
  activePrice = signal<number>(this.jewelryService.highestPrice);

  @ViewChild('searchInput') searchInput!: InputControlComponent;
  @Output() filtersChange = new EventEmitter<FiltersType>();

  switchCategory(category: ActiveCategoryType) {
    this.activeCategory.set(category);
    this.emitFiltersChange();
  }

  switchRating(rating: number) {
    this.activeRating.set(rating);
    this.emitFiltersChange();
  }

  handleClearFilter() {
    this.activeCategory.set('all');
    this.activeRating.set(4);
    this.activePrice.set(this.jewelryService.highestPrice);
    this.emitFiltersChange();
  }

  get highestPrice() {
    return this.jewelryService.highestPrice;
  }

  get minPrice() {
    return this.jewelryService.minPrice;
  }

  handlePriceChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.activePrice.set(Number(input.value));
    this.emitFiltersChange();
  }

  onSubmit() {
    const searchTerm = this.searchInput.getValue();
    this.emitFiltersChange(searchTerm);
  }

  private emitFiltersChange(searchTerm: string | null = null) {
    this.filtersChange.emit({
      searchTerm: searchTerm ?? this.searchInput.getValue(),
      category: this.activeCategory() === 'all' ? null : this.activeCategory(),
      rating: this.activeRating(),
      price: this.activePrice()
    });
  }
}

export type ActiveCategoryType = 'bracelets' | 'necklaces' | 'rings' | 'earrings' | 'all';
