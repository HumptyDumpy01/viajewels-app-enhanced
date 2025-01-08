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
  private cdr = inject(ChangeDetectorRef);
  private injector = inject(Injector);
  heading = input(`ViaJewels`);

  cartItems = input(0);
  wishlistedItems = 0;

  ngOnInit() {
    this.updateWishlistCount();
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.updateWishlistCount();
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
}
