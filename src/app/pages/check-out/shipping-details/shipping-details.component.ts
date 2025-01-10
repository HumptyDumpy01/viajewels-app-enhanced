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
import { ThemeService } from '../../../theme.service';

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
    const validate = validateShippingInfoForm.safeParse({
      firstName: this.firstNameInput.getValue(),
      lastName: this.lastNameInput.getValue(),
      address: this.addressInput.getValue(),
      apartment: this.apartmentInput.getValue(),
      city: this.cityInput.getValue(),
      country: this.countryInput.getValue(),
      state: this.stateInput.getValue(),
      zipCode: +this.zipCodeInput.getValue(),
      email: this.emailInput.getValue(),
      phone: this.phoneInput.getValue()
    });

    if (!validate.success) {
      this.errorMessage.set(validate.error.errors[0].message);
      scrollToTag(`.shipping-details-par`);
      return;
    }
    this.errorMessage.set(``);
    console.log(`Executing first name: ${this.firstNameInput.getValue()}`);
    console.log(`Executing last name: ${this.lastNameInput.getValue()}`);

    console.log(`Executing address: ${this.addressInput.getValue()}`);
    console.log(`Executing apartment: ${this.apartmentInput.getValue()}`);

    console.log(`Executing city: ${this.cityInput.getValue()}`);
    console.log(`Executing country: ${this.countryInput.getValue()}`);
    console.log(`Executing state: ${this.stateInput.getValue()}`);

    console.log(`Executing zip code: ${this.zipCodeInput.getValue()}`);

    console.log(`Executing email: ${this.emailInput.getValue()}`);
    console.log(`Executing phone: ${this.phoneInput.getValue()}`);
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
