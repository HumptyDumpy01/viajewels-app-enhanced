import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PopupsService } from '../../../popups.service';
import { CloseIconComponent } from '../../../UI/icons/close-icon/close-icon.component';
import { CurrencyPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { OrderDetailCardComponent } from '../../../UI/cards/order-detail-card/order-detail-card.component';
import {
  ViajewelsButtonSmallComponent
} from '../../../UI/buttons/viajewels-button-small/viajewels-button-small.component';
import { CartService, CartType } from '../../../cart.service';
import { JewelWishlistService } from '../../../jewel-wishlist.service';

@Component({
  selector: 'app-cart',
  imports: [
    CloseIconComponent,
    NgClass,
    CurrencyPipe,
    ViajewelsButtonComponent,
    NgIf,
    NgForOf,
    OrderDetailCardComponent,
    ViajewelsButtonSmallComponent
  ],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartService = inject(CartService);
  private wishlistService = inject(JewelWishlistService);
  private popupsService = inject(PopupsService);
  private cdr = inject(ChangeDetectorRef);

  totalCartPrice = 0;

  get cart() {
    return this.cartService.getCart();
  }

  get totalPrice() {
    return this.cart.reduce((acc, item) => acc + item.jewel.itemDetails.price, 0);
  }

  moveItemToWishlist(jewel: CartType) {
    this.cartService.removeFromCart(jewel);
    this.totalCartPrice -= jewel.jewel.itemDetails.price * jewel.count;
    if (this.wishlistService.userHasInWishlist(jewel.jewel.id)) {
    } else {
      this.wishlistService.addToWishlist(jewel.jewel);
    }
    this.cdr.detectChanges();
  }

  removeItemFromCart(jewel: CartType) {
    this.totalCartPrice -= jewel.jewel.itemDetails.price * jewel.count;
    this.cartService.removeFromCart(jewel);
    this.cdr.detectChanges();
  }

  get popupVisibility() {
    return this.popupsService.cartPopupVisibility();
  }

  onClose() {
    this.popupsService.changeCartPopupVisibility(false);
  }
}
