import { Component, inject, OnInit } from '@angular/core';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { NavigateToLinkComponent } from '../../../UI/links/navigate-to-link/navigate-to-link.component';
import { CartService } from '../../../cart.service';
import { OrderDetailCardComponent } from '../../../UI/cards/order-detail-card/order-detail-card.component';
import { CurrencyPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-check-out-header',
  imports: [
    ParagraphComponent,
    NavigateToLinkComponent,
    OrderDetailCardComponent,
    NgForOf,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './check-out-header.component.html',
  styleUrl: './check-out-header.component.css'
})
export class CheckOutHeaderComponent implements OnInit {

  private cartService = inject(CartService);

  ngOnInit() {
    if (this.cartService.getCart().length === 0) {
      window.location.href = '/';
    }
  }

  get cartItems() {
    return this.cartService.getCart();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

}
