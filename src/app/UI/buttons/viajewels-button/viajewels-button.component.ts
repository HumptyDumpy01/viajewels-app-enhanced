import { Component, input } from '@angular/core';
import { ButtonType } from '../../../../utils/generic-types/button.type';

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
  type = input.required<ButtonType>();

  styling = input.required<ViajewelsButtonStylingType>();

  get getStyles() {
    const defaultStyles = `border border-zinc-800
    transition-all duration-300 hover:bg-zinc-800 hover:text-white active:bg-white active:text-zinc-800`;
    const whiteStyles = ` bg-white text-red-600 border border-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white active:bg-white active:text-red-600`;
    const emptyWhiteStyles = `text-white border border-white transition-all duration-300
    hover:bg-white hover:text-red-600
    active:bg-red-600 active:text-white`;
    return this.styling() === `default` ? defaultStyles : this.styling() === `white` ? whiteStyles : emptyWhiteStyles;
  }

}


type ViajewelsButtonStylingType = `default` | `white` | `empty-white`;
