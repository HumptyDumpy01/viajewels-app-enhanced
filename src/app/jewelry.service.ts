import { Injectable } from '@angular/core';
import { JEWELRY, JewelryType } from '../../data/JEWELRY';

@Injectable({
  providedIn: 'root'
})
export class JewelryService {
  jewelry: JewelryType[] = JEWELRY;

  get highestPrice(): number {
    return Math.max(...this.jewelry.map(jewel => jewel.itemDetails.price));
  }

  get minPrice(): number {
    return Math.min(...this.jewelry.map(jewel => jewel.itemDetails.price));
  }

  get newestJewelry(): JewelryType[] {
    return this.jewelry.filter(jewel => jewel.itemDetails.tag.includes(`new`));
  }

  getJewelry(filters?: FiltersType): JewelryType[] {
    let jewelry = [...this.jewelry];

    if (filters && filters.category !== `all`) {
      if (filters.category) {
        // @ts-ignore
        jewelry = jewelry.filter(jewel => jewel.itemDetails.tag.includes(filters.category as CategoryType));
      }
      if (filters.searchTerm) {
        jewelry = jewelry.filter(jewel => jewel.itemDetails.heading.toLowerCase().includes(filters.searchTerm!.toLowerCase()) ||
          jewel.itemDetails.description.toLowerCase().includes(filters.searchTerm!.toLowerCase()));
      }
      if (filters.rating) {
        jewelry = jewelry.filter(jewel => jewel.itemDetails.rating >= filters.rating!);
      }
      if (filters.price) {
        jewelry = jewelry.filter(jewel => jewel.itemDetails.price <= filters.price!);
      }
    }

    return jewelry;
  }

  getJewel(id: number): JewelryType | undefined {
    return this.jewelry.find(jewel => jewel.id === id);
  }
}


type CategoryType = `bracelets` | `necklaces` | `rings` | `earrings` | `all`;

export type FiltersType = {
  searchTerm: string | null;
  category: CategoryType | null;
  rating: number | null;
  price: number | null;
}
