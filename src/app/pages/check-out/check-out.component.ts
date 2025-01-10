import { Component, inject } from '@angular/core';
import { CheckOutHeaderComponent } from './check-out-header/check-out-header.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { MinifiedItemCardsComponent } from '../../layout/minified-item-cards/minified-item-cards.component';
import { JewelWishlistService } from '../../jewel-wishlist.service';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../theme.service';
import { applyThemeClasses } from '../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-checkout',
  imports: [
    CheckOutHeaderComponent,
    ShippingDetailsComponent,
    MinifiedItemCardsComponent,
    NgIf
  ],
  standalone: true,
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  private jewelryWishlistService = inject(JewelWishlistService);

  getItems() {
    return this.jewelryWishlistService.getWishlist();
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
