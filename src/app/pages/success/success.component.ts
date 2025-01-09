import { Component, inject } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputDataType, ShippingDetailsComponent } from '../check-out/shipping-details/shipping-details.component';
import { CartService } from '../../cart.service';
import { OrderDetailCardComponent } from '../../UI/cards/order-detail-card/order-detail-card.component';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { NavigateToLinkComponent } from '../../UI/links/navigate-to-link/navigate-to-link.component';

@Component({
  selector: 'app-success',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    ShippingDetailsComponent,
    OrderDetailCardComponent,
    NgForOf,
    CurrencyPipe,
    NavigateToLinkComponent
  ],
  standalone: true,
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  private cartService = inject(CartService);

  get cart() {
    return this.cartService.getCart();
  }

  get totalPrice() {
    return this.cartService.getTotalPrice();
  }

  inputData: InputDataType = {
    firstName: {
      placeholder: `Bob`,
      readOnly: true
    },
    lastName: {
      placeholder: `Marley`,
      readOnly: true
    },
    address: {
      placeholder: `1234 Reggae St`,
      readOnly: true
    },
    apartment: {
      placeholder: `Apt 1, 2nd Floor`,
      readOnly: true
    },
    city: {
      placeholder: `Kingston`,
      readOnly: true
    },
    country: {
      placeholder: `Jamaica`,
      readOnly: true
    },
    state: {
      placeholder: `Some State`,
      readOnly: true
    },
    zipCode: {
      placeholder: `12345`,
      readOnly: true
    },
    email: {
      placeholder: `bob.marley@gmail.com`,
      readOnly: true
    },
    phone: {
      placeholder: `876-555-1234`,
      readOnly: true
    }
  };
}
