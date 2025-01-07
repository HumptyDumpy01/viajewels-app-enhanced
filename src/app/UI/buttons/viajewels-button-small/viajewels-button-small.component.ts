import { Component, input } from '@angular/core';
import { ButtonType } from '../../../../utils/generic-types/button.type';

@Component({
  selector: 'app-viajewels-button-small',
  imports: [],
  standalone: true,
  templateUrl: './viajewels-button-small.component.html',
  styleUrl: './viajewels-button-small.component.css'
})
export class ViajewelsButtonSmallComponent {
  type = input.required<ButtonType>();
  label = input.required<string>();
  mode = input.required<ModeType>();
}

type ModeType = `default` | `grey`;
