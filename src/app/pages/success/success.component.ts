import { Component, inject, OnInit, signal } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputDataType, ShippingDetailsComponent } from '../check-out/shipping-details/shipping-details.component';
import { CartService, CartType } from '../../services/cart.service';
import { OrderDetailCardComponent } from '../../UI/cards/order-detail-card/order-detail-card.component';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { NavigateToLinkComponent } from '../../UI/links/navigate-to-link/navigate-to-link.component';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { applyThemeClasses } from '../../../utils/functions/applyThemeClasses';

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
export class SuccessComponent implements OnInit {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  orderInfo = signal<OrderType | null>(null);

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);

    this.route.queryParams.subscribe((params) => {
      /* TODO: PARSE THIS DATA FROM URL AND THEN UPDATE THE UI */
      const orderId = params[`orderId`];
      const items = params[`items`];
      const totalCheckout = params[`totalCheckout`];
      const shipping = params[`shippingDetails`];
      if (orderId && items && totalCheckout && shipping) {
        this.orderInfo.set({
          id: orderId,
          items: JSON.parse(items),
          totalCheckout: parseFloat(totalCheckout),
          shipping: JSON.parse(shipping)
        });
      } else {
        window.location.href = '/';
      }
    });

  }

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
  protected readonly applyThemeClasses = applyThemeClasses;
}

export type OrderType = {
  id: string;
  items: CartType[];
  totalCheckout: number;
  shipping: InputDataType;
}
