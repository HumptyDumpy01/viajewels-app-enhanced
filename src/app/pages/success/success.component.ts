import { Component, inject, OnInit, signal } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputDataType, ShippingDetailsComponent } from '../check-out/shipping-details/shipping-details.component';
import { CartService } from '../../services/cart.service';
import { OrderDetailCardComponent } from '../../UI/cards/order-detail-card/order-detail-card.component';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { NavigateToLinkComponent } from '../../UI/links/navigate-to-link/navigate-to-link.component';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { applyThemeClasses } from '../../../utils/functions/applyThemeClasses';
import { ShippingDetailsType } from '../../services/stripe.service';

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
  inputData = signal<InputDataType | null>(null);

  get theme() {
    return this.themeService.getTheme;
  }

  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  orderInfo = signal<FinalOrderType | null>(null);

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);

    this.route.queryParams.subscribe((params) => {
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

        this.inputData.set({
          firstName: { placeholder: this.orderInfo()?.shipping.firstName!, readOnly: true },
          lastName: { placeholder: this.orderInfo()?.shipping.lastName!, readOnly: true },
          address: { placeholder: this.orderInfo()?.shipping.address!, readOnly: true },
          apartment: { placeholder: this.orderInfo()?.shipping.apartment!, readOnly: true },
          city: { placeholder: this.orderInfo()?.shipping.city!, readOnly: true },
          country: { placeholder: this.orderInfo()?.shipping.country!, readOnly: true },
          state: { placeholder: this.orderInfo()?.shipping.state!, readOnly: true },
          zipCode: { placeholder: String(this.orderInfo()?.shipping.zipCode!), readOnly: true },
          email: { placeholder: this.orderInfo()?.shipping.email!, readOnly: true },
          phone: { placeholder: this.orderInfo()?.shipping.phone!, readOnly: true }
        });

        console.log(this.orderInfo());
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

  get getInputData() {
    return this.inputData();
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}

export type FinalOrderType = {
  id: string;
  items: {
    jewelId: number;
    jewelTitle: string;
    price: number;
    quantity: number;
  }[],
  shipping: ShippingDetailsType;
  totalCheckout: number;
}
