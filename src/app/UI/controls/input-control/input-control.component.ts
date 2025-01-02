import { Component, input } from '@angular/core';
import { ControlType } from '../../../../utils/generic-types/control.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.css'
})
export class InputControlComponent {
  placeholder = input<string>(``);
  required = input<boolean>(true);
  type = input.required<ControlType>();
  helperText = input.required<string>();
  name = input<string>(``);
  mode = input<InputControlMode>(`red`);

  formControlName = input<string>(``);

  get inputStyles() {
    const redStyles = `
    w-full py-4 pb-5 pl-1 px-4 text-3xl bg-transparent
    text-white placeholder-white border-2 border-transparent border-b-white
         focus:outline-none focus:border-2 focus:pl-5 focus:border-white
         transition-all duration-300`;
    const blackStyles = `
    w-full py-4 pb-5 pl-1 px-4 text-3xl bg-transparent
    text-zinc-800 placeholder-zinc-800 border-2 border-transparent border-b-zinc-800
          focus:outline-none focus:border-2 focus:pl-5 focus:border-zinc-800
          transition-all duration-300`;

    return this.mode() === `red` ? redStyles : blackStyles;
  }

}

type InputControlMode = `black` | `red`;

