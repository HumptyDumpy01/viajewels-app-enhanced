import { Component } from '@angular/core';
import { CheckOutHeaderComponent } from './check-out-header/check-out-header.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

@Component({
  selector: 'app-checkout',
  imports: [
    CheckOutHeaderComponent,
    ShippingDetailsComponent
  ],
  standalone: true,
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {

}
