import { Injectable, signal } from '@angular/core';
import { JewelryType } from '../../data/JEWELRY';

@Injectable({
  providedIn: 'root'
})
export class JewelWishlistService {
  wishlist = signal<JewelryType[]>(this.loadWishlistFromLocalStorage());

  private loadWishlistFromLocalStorage(): JewelryType[] {
    const wishlistJson = localStorage.getItem('wishlist');
    return wishlistJson ? JSON.parse(wishlistJson) : [];
  }

  private saveWishlistToLocalStorage() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist()));
  }

  getWishlist() {
    return this.wishlist();
  }

  userHasInWishlist(id: number) {
    return this.wishlist().some((item) => item.id === id);
  }

  addToWishlist(jewel: JewelryType) {
    this.wishlist.update((prev) => {
      if (!prev.some((item) => item.id === jewel.id)) {
        const updatedWishlist = [...prev, jewel];
        this.saveWishlistToLocalStorage();
        return updatedWishlist;
      }
      return prev;
    });
    this.saveWishlistToLocalStorage();
  }

  removeFromWishlist(jewel: JewelryType) {
    this.wishlist.update((prev) => {
      const updatedWishlist = prev.filter((j) => j.id !== jewel.id);
      this.saveWishlistToLocalStorage();
      return updatedWishlist;
    });
    this.saveWishlistToLocalStorage();
  }
}
