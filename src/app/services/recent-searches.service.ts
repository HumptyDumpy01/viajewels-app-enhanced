import { Injectable, signal } from '@angular/core';
import { JewelryType } from '../../../data/JEWELRY';

@Injectable({
  providedIn: 'root'
})
export class RecentSearchesService {

  recentSearches = signal<JewelryType[]>(this.loadWishlistFromLocalStorage());

  private loadWishlistFromLocalStorage(): JewelryType[] {
    const recentSearchesJson = localStorage.getItem('recentSearches');
    return recentSearchesJson ? JSON.parse(recentSearchesJson) : [];
  }

  private saveRecentSearchToLocalStorage() {
    localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches()));
  }

  get getRecentSearches() {
    return this.recentSearches();
  }

  userHasInRecentSearches(id: number) {
    return this.recentSearches().some((item) => item.id === id);
  }

  addToRecentSearch(jewel: JewelryType) {
    this.recentSearches.update((prev) => {
      if (!prev.some((item) => item.id === jewel.id)) {
        const updatedRecentSearches = [...prev, jewel];
        this.saveRecentSearchToLocalStorage();
        return updatedRecentSearches;
      }
      return prev;
    });
    this.saveRecentSearchToLocalStorage();
  }
}
