import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PopupsService } from '../../../popups.service';
import { JewelryType } from '../../../../../data/JEWELRY';
import { CloseIconComponent } from '../../../UI/icons/close-icon/close-icon.component';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';

@Component({
  selector: 'app-cart',
  imports: [
    CloseIconComponent,
    NgClass,
    CurrencyPipe,
    ViajewelsButtonComponent,
    NgIf
  ],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // private jewelryWishlistService = inject(JewelWishlistService);
  private popupsService = inject(PopupsService);
  private cdr = inject(ChangeDetectorRef);

  totalWishlistPrice = 0;

  get wishlist() {
    // return this.jewelryWishlistService.getWishlist();
    return [];
  }

  removeItemFromWishlist(jewel: JewelryType) {
    // this.jewelryWishlistService.removeFromWishlist(jewel);
    this.totalWishlistPrice -= jewel.itemDetails.price;
    this.cdr.detectChanges();
  }

  get popupVisibility() {
    return this.popupsService.cartPopupVisibility();
  }

  onClose() {
    this.popupsService.changeCartPopupVisibility(false);
  }

  onTotalPriceChange(priceDifference: number) {
    this.totalWishlistPrice += priceDifference;
    this.cdr.detectChanges();
  }
}
