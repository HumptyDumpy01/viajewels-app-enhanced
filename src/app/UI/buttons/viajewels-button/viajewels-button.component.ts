import { Component, input } from '@angular/core';
import { ButtonType } from '../../../../utils/generic-types/button.type';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viajewels-button',
  imports: [
    NgIf,
    RouterLink
  ],
  standalone: true,
  templateUrl: './viajewels-button.component.html',
  styleUrl: './viajewels-button.component.css'
})
export class ViajewelsButtonComponent {
  label = input.required<string>();
  customClasses = input<string>(``);
  type = input.required<ButtonType>();

  mode = input<ButtonModeType>(`btn`);

  href = input<string | undefined>(``);

  styling = input.required<ViajewelsButtonStylingType>();

  get getStyles() {
    const defaultStyles = `border border-zinc-800 text-zinc-800
    transition-all duration-300 hover:bg-zinc-800 hover:text-white active:bg-transparent active:text-zinc-800`;
    const whiteStyles = ` bg-white text-red-600 border border-red-600 hover:border hover:border-white transition-all duration-300 hover:bg-red-600 hover:text-white active:bg-transparent active:text-red-600`;
    const emptyWhiteStyles = `text-white border border-white transition-all duration-300
    hover:bg-white hover:text-red-600
    active:bg-transparent active:text-white`;
    return this.styling() === `default` ? defaultStyles : this.styling() === `white` ? whiteStyles : emptyWhiteStyles;
  }

}


type ViajewelsButtonStylingType = `default` | `white` | `empty-white`;

export type ButtonModeType = `btn` | `link`;
