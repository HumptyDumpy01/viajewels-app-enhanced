import { Injectable, signal } from '@angular/core';
import { JewelryType } from '../../data/JEWELRY';

type CartType = {
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

  userHasInCart(id: number) {
    return this.cart().some((item) => item.jewel.id === id);
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

  removeFromCart(jewel: CartType) {
    this.cart.update((prev) => {
      const updatedCart = prev.filter((j) => j.jewel.id !== jewel.jewel.id);
      this.saveCartToLocalStorage();
      return updatedCart;
    });
    this.saveCartToLocalStorage();
  }
}
