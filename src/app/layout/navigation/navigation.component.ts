import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  Injector,
  input,
  OnInit,
  runInInjectionContext
} from '@angular/core';
import { JewelWishlistService } from '../../jewel-wishlist.service';
import { PopupsService } from '../../popups.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-navigation',
  imports: [],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  private popupsService = inject(PopupsService);

  private jewelWishlistService = inject(JewelWishlistService);
  private cartService = inject(CartService);
  private cdr = inject(ChangeDetectorRef);
  private injector = inject(Injector);
  heading = input(`ViaJewels`);

  cartItems = 0;
  wishlistedItems = 0;

  ngOnInit() {
    this.updateWishlistCount();
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.updateWishlistCount();
      }, { allowSignalWrites: true });
    });

    this.updateCartCount();
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.updateCartCount();
      }, { allowSignalWrites: true });
    });
  }

  onCartClick() {
    this.popupsService.changeCartPopupVisibility(true);
  }

  onWishlistClick() {
    this.popupsService.changeWishlistPopupVisibility(true);
  }

  private updateWishlistCount() {
    this.wishlistedItems = this.jewelWishlistService.getWishlist().length;
    this.cdr.detectChanges();
  }

  private updateCartCount() {
    this.cartItems = this.cartService.getCart().length;
    this.cdr.detectChanges();
  }


}
