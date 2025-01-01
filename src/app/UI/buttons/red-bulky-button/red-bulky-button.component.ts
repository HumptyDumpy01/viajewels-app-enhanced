import { Component, input } from '@angular/core';
import { ButtonType } from '../../../../utils/generic-types/button.type';

@Component({
  selector: 'app-red-bulky-button',
  imports: [],
  standalone: true,
  templateUrl: './red-bulky-button.component.html',
  styleUrl: './red-bulky-button.component.css'
})
export class RedBulkyButtonComponent {
  type = input<ButtonType>(`button`);
  label = input.required<string>();
}
