import { Component, input } from '@angular/core';
import { ThemeType } from '../../theme/toggle-icon/toggle-icon.component';

@Component({
  selector: 'app-cart-icon',
  imports: [],
  standalone: true,
  templateUrl: './cart-icon.component.html',
  styleUrl: './cart-icon.component.css'
})
export class CartIconComponent {
  mode = input<ThemeType>('light');
}
