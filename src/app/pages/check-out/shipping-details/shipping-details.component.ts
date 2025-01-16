import { Component, inject, input, signal, ViewChild } from '@angular/core';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import {
  ButtonModeType,
  ViajewelsButtonComponent
} from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { InfoMessageComponent } from '../../../UI/info/info-message/info-message.component';
import { ButtonType } from '../../../../utils/generic-types/button.type';
import { FormsModule } from '@angular/forms';
import { validateShippingInfoForm } from '../../../../utils/schemas/validateShippingInfoForm';
import { scrollToTag } from '../../../../utils/functions/scrollToTag';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { SessionDataType, StripeService } from '../../../services/stripe.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shipping-details',
  imports: [
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent,
    InfoMessageComponent,
    FormsModule,
    NgIf
  ],
  standalone: true,
  templateUrl: './shipping-details.component.html',
  styleUrl: './shipping-details.component.css'
})
export class ShippingDetailsComponent {
  private themeService = inject(ThemeService);
  private cartService = inject(CartService);
  private stripeService = inject(StripeService);

  get theme() {
    return this.themeService.getTheme;
  }

  button = input.required<BtnType>();
  errorMessage = signal(``);
  infoMessage = input(`Double-check everything to make sure it’s just how you want it.`);

  inputData = input<InputDataType>({
    firstName: {
      placeholder: `First Name`,
      readOnly: false
    },
    lastName: {
      placeholder: `Last Name`,
      readOnly: false
    },
    address: {
      placeholder: `Address`,
      readOnly: false
    },
    apartment: {
      placeholder: `Apartment(optional)`,
      readOnly: false
    },
    city: {
      placeholder: `City`,
      readOnly: false
    },
    country: {
      placeholder: `Country`,
      readOnly: false
    },
    state: {
      placeholder: `State`,
      readOnly: false
    },
    zipCode: {
      placeholder: `Zip Code`,
      readOnly: false
    },
    email: {
      placeholder: `Email`,
      readOnly: false
    },
    phone: {
      placeholder: `Phone`,
      readOnly: false
    }
  });


  @ViewChild('firstNameInput') firstNameInput!: InputControlComponent;
  @ViewChild('lastNameInput') lastNameInput!: InputControlComponent;
  @ViewChild('addressInput') addressInput!: InputControlComponent;
  @ViewChild('apartmentInput') apartmentInput!: InputControlComponent;
  @ViewChild('cityInput') cityInput!: InputControlComponent;
  @ViewChild('countryInput') countryInput!: InputControlComponent;
  @ViewChild('stateInput') stateInput!: InputControlComponent;
  @ViewChild('zipCodeInput') zipCodeInput!: InputControlComponent;
  @ViewChild('emailInput') emailInput!: InputControlComponent;
  @ViewChild('phoneInput') phoneInput!: InputControlComponent;

  onSubmit() {
    this.errorMessage.set(``);

    const firstName = this.firstNameInput.getValue();
    const lastName = this.lastNameInput.getValue();
    const address = this.addressInput.getValue();
    const apartment = this.apartmentInput.getValue();
    const city = this.cityInput.getValue();
    const country = this.countryInput.getValue();
    const state = this.stateInput.getValue();
    const zipCode = Number(this.zipCodeInput.getValue());
    const email = this.emailInput.getValue();
    const phone = this.phoneInput.getValue();

    const validate = validateShippingInfoForm.safeParse({
      firstName,
      lastName,
      address,
      apartment,
      city,
      country,
      state,
      zipCode,
      email,
      phone
    });

    if (!validate.success) {
      this.errorMessage.set(validate.error.errors[0].message);
      scrollToTag(`.shipping-details-par`);
      return;
    }
    this.errorMessage.set(``);

    const sessionData: SessionDataType = {
      items: this.cartService.getCart().map(item => {
        return {
          jewelId: item.jewel.id,
          jewelTitle: item.jewel.itemDetails.heading,
          quantity: item.count,
          price: item.jewel.itemDetails.price
        };
      }),
      shippingDetails: {
        firstName,
        lastName,
        address,
        apartment,
        city,
        country,
        state,
        zipCode,
        email,
        phone
      },
      totalCheckout: this.cartService.getTotalPrice()
    };

    this.stripeService.createCheckoutSession(sessionData).subscribe({
      next: (response: any) => {
        if (response.url) {
          window.location.href = response.url;
        } else {
          this.errorMessage.set('Failed to create checkout session. Please try again.');
        }
      },
      error: (err) => {
        this.errorMessage.set('Failed to create checkout session. Please try again.');
      }
    });
  }

  protected readonly input = input;
}

export type InputDataType = {
  firstName: {
    placeholder: string;
    readOnly: boolean;
  },
  lastName: {
    placeholder: string;
    readOnly: boolean;
  },
  address: {
    placeholder: string;
    readOnly: boolean;
  },
  apartment: {
    placeholder: string;
    readOnly: boolean;
  },
  city: {
    placeholder: string;
    readOnly: boolean;
  },
  country: {
    placeholder: string;
    readOnly: boolean;
  },
  state: {
    placeholder: string;
    readOnly: boolean;
  },
  zipCode: {
    placeholder: string;
    readOnly: boolean;
  },
  email: {
    placeholder: string;
    readOnly: boolean;
  },
  phone: {
    placeholder: string;
    readOnly: boolean;
  }
}

type BtnType = {
  type: ButtonType,
  text: string,
  btnMode: ButtonModeType,
  href?: string | undefined
}
