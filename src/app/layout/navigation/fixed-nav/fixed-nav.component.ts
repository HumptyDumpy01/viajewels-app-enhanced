import {
  ChangeDetectorRef,
  Component,
  effect,
  HostListener,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
  signal
} from '@angular/core';
import { ToggleIconComponent } from '../../../UI/theme/toggle-icon/toggle-icon.component';
import { EmptyHeartIconComponent } from '../../../UI/icons/empty-heart-icon/empty-heart-icon.component';
import { CartIconComponent } from '../../../UI/icons/cart-icon/cart-icon.component';
import { ThemeService } from '../../../theme.service';
import { PopupsService } from '../../../popups.service';
import { JewelWishlistService } from '../../../jewel-wishlist.service';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-fixed-nav',
  imports: [
    ToggleIconComponent,
    EmptyHeartIconComponent,
    CartIconComponent
  ],
  standalone: true,
  templateUrl: './fixed-nav.component.html',
  styleUrl: './fixed-nav.component.css'
})
export class FixedNavComponent implements OnInit {
  private themeService = inject(ThemeService);
  isVisible = signal(false);

  get theme() {
    return this.themeService.getTheme;
  }

  get btnStyles() {
    const defaultStyles = `transition-all duration-300 ease-in-out hover:animate-pulse`;
    const ifLightTheme = `${defaultStyles} bg-white h-12 w-12 rounded-full flex items-center justify-center border border-zinc-200`;
    const ifDarkTheme = `${defaultStyles} bg-zinc-900 text-white h-12 w-12 rounded-full flex items-center justify-center`;

    return this.theme === 'light' ? ifLightTheme : ifDarkTheme;
  }

  private popupsService = inject(PopupsService);
  private jewelWishlistService = inject(JewelWishlistService);

  private cartService = inject(CartService);
  private cdr = inject(ChangeDetectorRef);
  private injector = inject(Injector);

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible.set(scrollPosition > 200);
    this.cdr.detectChanges();
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


  handleTogglingTheme() {
    this.themeService.changeTheme(this.theme === 'light' ? 'dark' : 'light');
    this.cdr.detectChanges();
  }

}
