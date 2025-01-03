import { Component } from '@angular/core';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { InfoMessageComponent } from '../../../UI/info/info-message/info-message.component';

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

}
