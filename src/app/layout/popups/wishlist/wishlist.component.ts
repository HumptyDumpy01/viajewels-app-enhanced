import { Component, signal } from '@angular/core';
import { OrderDetailCardComponent } from '../../../UI/cards/order-detail-card/order-detail-card.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import {
  ViajewelsButtonSmallComponent
} from '../../../UI/buttons/viajewels-button-small/viajewels-button-small.component';

@Component({
  selector: 'app-wishlist',
  imports: [
    OrderDetailCardComponent,
    ViajewelsButtonComponent,
    ViajewelsButtonSmallComponent
  ],
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  open = signal<boolean>(true);

  onClose() {
    this.open.set(false);
  }
}
