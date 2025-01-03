import { Component, input } from '@angular/core';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import {
  ButtonModeType,
  ViajewelsButtonComponent
} from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { InfoMessageComponent } from '../../../UI/info/info-message/info-message.component';
import { ButtonType } from '../../../../utils/generic-types/button.type';

@Component({
  selector: 'app-shipping-details',
  imports: [
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent,
    InfoMessageComponent
  ],
  standalone: true,
  templateUrl: './shipping-details.component.html',
  styleUrl: './shipping-details.component.css'
})
export class ShippingDetailsComponent {
  button = input.required<BtnType>();
}

type BtnType = {
  type: ButtonType,
  text: string,
  btnMode: ButtonModeType,
  href?: string | undefined
}
