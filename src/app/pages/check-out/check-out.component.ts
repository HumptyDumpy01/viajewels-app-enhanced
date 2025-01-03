import { Component } from '@angular/core';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { CheckOutHeaderComponent } from './check-out-header/check-out-header.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

@Component({
  selector: 'app-checkout',
  imports: [
    ParagraphComponent,
    CheckOutHeaderComponent,
    ShippingDetailsComponent
  ],
  standalone: true,
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {

}
