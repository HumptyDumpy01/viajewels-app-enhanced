import { Injectable, signal } from '@angular/core';
import { JewelryType } from '../../data/JEWELRY';

export type CartType = {
  jewel: JewelryType;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartType[]>(this.loadCartFromLocalStorage());

  private loadCartFromLocalStorage(): CartType[] {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : [];
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }

  getCart() {
    return this.cart();
  }

  addToCart(cartItem: CartType) {
    this.cart.update((prev) => {
      if (!prev.some((item) => item.jewel.id === cartItem.jewel.id)) {
        const updatedCart = [...prev, cartItem];
        this.saveCartToLocalStorage();
        return updatedCart;
      }
      return prev;
    });
    this.saveCartToLocalStorage();
  }

  increaseItemCount(jewel: JewelryType) {
    this.cart.update((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.jewel.id === jewel.id && item.jewel.itemsLeft > item.count) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      this.saveCartToLocalStorage();
      return updatedCart;
    });
    this.saveCartToLocalStorage();
  }

  decreaseItemCount(jewel: JewelryType) {
    this.cart.update((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.jewel.id === jewel.id && item.count > 1) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      this.saveCartToLocalStorage();
      return updatedCart;
    });
    this.saveCartToLocalStorage();
  }

  removeFromCart(jewel: CartType) {
    this.cart.update((prev) => {
      const updatedCart = prev.filter((j) => j.jewel.id !== jewel.jewel.id);
      this.saveCartToLocalStorage();
      return updatedCart;
    });
    this.saveCartToLocalStorage();
  }

  getTotalPrice() {
    return this.cart().reduce((total, item) => total + item.jewel.itemDetails.price * item.count, 0);
  }
}
