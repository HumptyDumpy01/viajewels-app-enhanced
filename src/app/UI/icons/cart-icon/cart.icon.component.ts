import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  imports: [],
  standalone: true,
  templateUrl: './cart.icon.component.html',
  styleUrl: './cart.icon.component.css'
})
export class CartIconComponent {
  fill = input<string>(`#525252`);
}
