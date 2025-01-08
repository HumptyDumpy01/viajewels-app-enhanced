import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupsService {
  wishlistPopupVisibility = signal(false);
  cartPopupVisibility = signal(true);

  changeWishlistPopupVisibility(val: boolean) {
    this.wishlistPopupVisibility.set(val);
  }

  changeCartPopupVisibility(val: boolean) {
    this.cartPopupVisibility.set(val);
  }
}
