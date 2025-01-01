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

  mode = input<InputControlMode>(`red`);

  get inputStyles() {
    const redStyles = `
    w-full py-4 pb-5 pl-1 px-4 text-3xl bg-red-600
    text-white placeholder-white border-2 border-red-600 border-b-white
         focus:outline-0 focus:border-2 focus:pl-5 focus:border-white
         transition-all duration-300`;
    const blackStyles = `
    w-full py-4 pb-5 pl-1 px-4 text-3xl
    text-zinc-800 placeholder-zinc-800 border-2 border-transparent border-b-zinc-800
          focus:outline-0 focus:border-2 focus:pl-5 focus:border-zinc-800
          transition-all duration-300`;

    return this.mode() === `red` ? redStyles : blackStyles;
  }

}

type InputControlMode = `black` | `red`;

