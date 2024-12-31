import { Component, input } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  imports: [],
  standalone: true,
  templateUrl: './arrow-icon.component.html',
  styleUrl: './arrow-icon.component.css'
})
export class ArrowIconComponent {
  customClasses = input<string>();
}
