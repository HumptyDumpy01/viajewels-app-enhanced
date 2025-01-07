import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupsService {
  wishlistPopupVisibility = signal(false);

  changeWishlistPopupVisibility(val: boolean) {
    this.wishlistPopupVisibility.set(val);
  }
}
