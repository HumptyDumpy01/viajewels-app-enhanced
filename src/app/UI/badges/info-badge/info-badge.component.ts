import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-badge',
  imports: [],
  standalone: true,
  templateUrl: './info-badge.component.html',
  styleUrl: './info-badge.component.css'
})
export class InfoBadgeComponent {
  heading = input.required<string>();
  linkHref = input.required<string>();
  linkLabel = input.required<string>();
}
