import { Component, input } from '@angular/core';
import { MenuIconComponent } from '../UI/icons/menu-icon/menu.icon.component';
import { CartIconComponent } from '../UI/icons/cart-icon/cart.icon.component';

@Component({
  selector: 'app-navigation',
  imports: [CartIconComponent, MenuIconComponent],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  heading = input(`ViaJewels`);
}
