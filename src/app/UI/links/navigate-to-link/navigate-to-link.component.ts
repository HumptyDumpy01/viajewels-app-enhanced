import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigate-to-link',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './navigate-to-link.component.html',
  styleUrl: './navigate-to-link.component.css'
})
export class NavigateToLinkComponent {
  href = input<string[]>([]);
  label = input.required<string>();
}
