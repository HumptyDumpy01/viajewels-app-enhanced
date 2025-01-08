import { Component } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { OrderDetailCardComponent } from '../../UI/cards/order-detail-card/order-detail-card.component';
import { ShippingDetailsComponent } from '../check-out/shipping-details/shipping-details.component';

@Component({
  selector: 'app-success',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    ShippingDetailsComponent
  ],
  standalone: true,
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

}
