import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-grey',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './link-grey.component.html',
  styleUrl: './link-grey.component.css'
})
export class LinkGreyComponent {
  label = input.required<string>();
  routerLink = input<string>(`#`);
  customClasses = input<string>(``);

}
