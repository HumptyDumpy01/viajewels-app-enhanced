import { Component, inject } from '@angular/core';
import { OrderDetailCardComponent } from '../../../UI/cards/order-detail-card/order-detail-card.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import {
  ViajewelsButtonSmallComponent
} from '../../../UI/buttons/viajewels-button-small/viajewels-button-small.component';
import { NgClass } from '@angular/common';
import { PopupsService } from '../../../popups.service';

@Component({
  selector: 'app-wishlist',
  imports: [
    OrderDetailCardComponent,
    ViajewelsButtonComponent,
    ViajewelsButtonSmallComponent,
    NgClass
  ],
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  private popupsService = inject(PopupsService);

  get popupVisibility() {
    return this.popupsService.wishlistPopupVisibility();
  }

  onClose() {
    this.popupsService.changeWishlistPopupVisibility(false);
  }
}
