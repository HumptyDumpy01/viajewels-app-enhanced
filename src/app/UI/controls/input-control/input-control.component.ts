import { Component, input } from '@angular/core';
import { ControlType } from '../../../../utils/generic-types/control.type';

@Component({
  selector: 'app-input-control',
  imports: [],
  standalone: true,
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.css'
})
export class InputControlComponent {
  placeholder = input<string>(``);
  required = input<boolean>(true);
  type = input.required<ControlType>();
  helperText = input.required<string>();
}

