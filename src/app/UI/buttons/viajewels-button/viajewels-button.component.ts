import { Component, input } from '@angular/core';

@Component({
  selector: 'app-viajewels-button',
  imports: [],
  standalone: true,
  templateUrl: './viajewels-button.component.html',
  styleUrl: './viajewels-button.component.css'
})
export class ViajewelsButtonComponent {
  label = input.required<string>();
  customClasses = input<string>(``);
}
