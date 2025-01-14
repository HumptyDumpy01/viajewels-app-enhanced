import { inject, Injectable, signal } from '@angular/core';
import { JewelryType } from '../../data/JEWELRY';
import { HttpClient } from '@angular/common/http';
import { StatusType } from './reviews.service';
import { catchError, map, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JewelryService {
  private httpClient = inject(HttpClient);
  jewelry = signal<JewelryType[]>([]);

  constructor() {
    this.loadJewelry().subscribe();
  }

  loadJewelry() {
    return this.fetchJewelry(`${environment.backendUrl}/jewelry`).pipe(
      map(response => {
        if (response) {
          if (response.status === 'success' && Array.isArray(response.data)) {
            return response.data;
          } else {
            throw new Error('Invalid response format');
          }
        } else {
          throw new Error('Invalid response');
        }
      }),
      tap({
        next: (jewelry) => this.jewelry.set(jewelry)
      })
    );
  }

  get highestPrice(): number {
    return Math.max(...this.jewelry().map(jewel => jewel.itemDetails.price));
  }

  get minPrice(): number {
    return Math.min(...this.jewelry().map(jewel => jewel.itemDetails.price));
  }

  get newestJewelry(): JewelryType[] {
    return this.jewelry().filter(jewel => jewel.itemDetails.tag.includes('new'));
  }

  getJewelry(filters?: FiltersType): JewelryType[] {
    let jewelry = [...this.jewelry()];

    if (filters && filters.category !== 'all') {
      if (filters.category) {
        // @ts-ignore
        jewelry = jewelry.filter(jewel => jewel.itemDetails.tag.includes(filters.category as CategoryType));
      }
      if (filters.searchTerm) {
        jewelry = jewelry.filter(jewel => jewel.itemDetails.heading.toLowerCase().includes(filters.searchTerm!.toLowerCase()) ||
          jewel.itemDetails.description.toLowerCase().includes(filters.searchTerm!.toLowerCase()));
      }
      if (filters.rating) {
        jewelry = jewelry.filter(jewel => jewel.itemDetails.rating
          .reduce((acc, itm) => acc + itm, 0) / jewel.itemDetails.rating.length >= filters.rating!);
      }
      if (filters.price) {
        jewelry = jewelry.filter(jewel => jewel.itemDetails.price <= filters.price!);
      }
    }

    return jewelry;
  }

  getJewel(id: number): JewelryType | undefined {
    return this.jewelry().find(jewel => jewel.id === id);
  }

  fetchJewelry(url: string) {
    return this.httpClient.get<JewelResponseType>(url, {
      observe: 'response'
    }).pipe(
      map(resData => resData.body),
      catchError((err, _) =>
        throwError(() => new Error(err.message))
      )
    );
  }
}

export type JewelResponseType = {
  status: StatusType,
  data: JewelryType[] | { error: string }
};

type CategoryType = 'bracelets' | 'necklaces' | 'rings' | 'earrings' | 'all';

export type FiltersType = {
  searchTerm: string | null;
  category: CategoryType | null;
  rating: number | null;
  price: number | null;
}
