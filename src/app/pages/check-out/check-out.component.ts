import { Component, inject } from '@angular/core';
import { CheckOutHeaderComponent } from './check-out-header/check-out-header.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { MinifiedItemCardsComponent } from '../../layout/minified-item-cards/minified-item-cards.component';
import { JewelryService } from '../../jewelry.service';

@Component({
  selector: 'app-checkout',
  imports: [
    CheckOutHeaderComponent,
    ShippingDetailsComponent,
    MinifiedItemCardsComponent
  ],
  standalone: true,
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  private jewelryService = inject(JewelryService);

  getItems() {
    return this.jewelryService.getJewelry().filter((jewel) => jewel.addedToWishlist).slice(0, 3);
  }

}
