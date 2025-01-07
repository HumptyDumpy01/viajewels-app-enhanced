import { Component, inject, input } from '@angular/core';
import { JewelWishlistService } from '../../jewel-wishlist.service';

@Component({
  selector: 'app-navigation',
  imports: [],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  private jewelWishlistService = inject(JewelWishlistService);
  heading = input(`ViaJewels`);

  cartItems = input(0);
  wishlistedItems = this.jewelWishlistService.getWishlist().length;

}
