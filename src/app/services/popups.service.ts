import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupsService {
  wishlistPopupVisibility = signal(false);
  cartPopupVisibility = signal(false);

  changeWishlistPopupVisibility(val: boolean) {
    this.wishlistPopupVisibility.set(val);
  }

  changeCartPopupVisibility(val: boolean) {
    this.cartPopupVisibility.set(val);
  }

  closeAll() {
    if (this.wishlistPopupVisibility()) {
      this.changeWishlistPopupVisibility(false);
    }
    if (this.cartPopupVisibility()) {
      this.changeCartPopupVisibility(false);
    }
  }
}
