import { Component, inject } from '@angular/core';
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
  private jewelryWishlistService = inject(JewelWishlistService);

  private popupsService = inject(PopupsService);

  get wishlist() {
    return this.jewelryWishlistService.getWishlist();
  }

  removeItemFromWishlist(jewel: JewelryType) {
    this.jewelryWishlistService.removeFromWishlist(jewel);
  }

  get popupVisibility() {
    return this.popupsService.wishlistPopupVisibility();
  }

  onClose() {
    this.popupsService.changeWishlistPopupVisibility(false);
  }
}
