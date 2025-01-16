import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PopupsService } from '../../../services/popups.service';
import { CloseIconComponent } from '../../../UI/icons/close-icon/close-icon.component';
import { CurrencyPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { OrderDetailCardComponent } from '../../../UI/cards/order-detail-card/order-detail-card.component';
import {
  ViajewelsButtonSmallComponent
} from '../../../UI/buttons/viajewels-button-small/viajewels-button-small.component';
import { CartService, CartType } from '../../../services/cart.service';
import { JewelWishlistService } from '../../../services/jewel-wishlist.service';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-cart',
  imports: [
    CloseIconComponent,
    NgClass,
    ViajewelsButtonComponent,
    NgIf,
    NgForOf,
    OrderDetailCardComponent,
    ViajewelsButtonSmallComponent,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  private cartService = inject(CartService);
  private wishlistService = inject(JewelWishlistService);
  private popupsService = inject(PopupsService);
  private cdr = inject(ChangeDetectorRef);

  totalCartPrice = 0;

  get cart() {
    return this.cartService.getCart();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  moveItemToWishlist(jewel: CartType) {
    this.cartService.removeFromCart(jewel);
    this.totalCartPrice -= jewel.jewel.itemDetails.price * jewel.count;
    if (!this.wishlistService.userHasInWishlist(jewel.jewel.id)) {
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

  onCheckoutBtnClick() {
    window.location.href = '/checkout';
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
