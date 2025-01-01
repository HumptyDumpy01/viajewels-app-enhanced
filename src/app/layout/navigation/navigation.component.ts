import { Component, input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  heading = input(`ViaJewels`);

  cartItems = input(0);
  wishlistedItems = input([]);

}
