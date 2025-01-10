import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { OrderDetailCardComponent } from '../../../UI/cards/order-detail-card/order-detail-card.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import {
  ViajewelsButtonSmallComponent
} from '../../../UI/buttons/viajewels-button-small/viajewels-button-small.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { PopupsService } from '../../../popups.service';
import { CloseIconComponent } from '../../../UI/icons/close-icon/close-icon.component';
import { JewelWishlistService } from '../../../jewel-wishlist.service';
import { JewelryType } from '../../../../../data/JEWELRY';
import { CartService } from '../../../cart.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'app-wishlist',
  imports: [
    OrderDetailCardComponent,
    ViajewelsButtonComponent,
    ViajewelsButtonSmallComponent,
    NgClass,
    CloseIconComponent,
    NgForOf,
    NgIf
  ],
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  private jewelryWishlistService = inject(JewelWishlistService);
  private cartService = inject(CartService);
  private popupsService = inject(PopupsService);
  private cdr = inject(ChangeDetectorRef);

  totalWishlistPrice = 0;

  get wishlist() {
    return this.jewelryWishlistService.getWishlist();
  }

  removeItemFromWishlist(jewel: JewelryType) {
    this.jewelryWishlistService.removeFromWishlist(jewel);
    this.totalWishlistPrice -= jewel.itemDetails.price;
    this.cdr.detectChanges();
  }

  handleMoveItemToCart(jewel: JewelryType) {
    // if there are no items left in stock, then just remove the item from wishlist
    if (jewel.itemsLeft === 0) {
      this.jewelryWishlistService.removeFromWishlist(jewel);
      return;
    }
    this.jewelryWishlistService.removeFromWishlist(jewel);
    this.cartService.addToCart({ jewel, count: 1 });
    this.totalWishlistPrice -= jewel.itemDetails.price;
    this.cdr.detectChanges();
  }

  moveAllItemsToCart() {
    for (const jewel of this.wishlist) {
      if (jewel.itemsLeft === 0) {
        this.jewelryWishlistService.removeFromWishlist(jewel);
        this.cdr.detectChanges();
        return;
      } else {
        this.cartService.addToCart({ jewel, count: 1 });
        this.totalWishlistPrice -= jewel.itemDetails.price;
        this.jewelryWishlistService.removeFromWishlist(jewel);
        this.cdr.detectChanges();
      }
    }
  }

  get popupVisibility() {
    return this.popupsService.wishlistPopupVisibility();
  }

  onClose() {
    this.popupsService.changeWishlistPopupVisibility(false);
  }

  onTotalPriceChange(priceDifference: number) {
    this.totalWishlistPrice += priceDifference;
    this.cdr.detectChanges();
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
