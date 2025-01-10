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

  get styles() {
    const defaultStyles = `border border-zinc-800 text-zinc-800 hover:bg-zinc-900 hover:text-white`;
    const greyStyles = `border border-zinc-400 text-zinc-400 hover:bg-red-600 hover:text-white hover:border-transparent`;
    const whitishStyles = `border border-zinc-100 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-800`;

    let chosenStyles = ``;

    switch (this.mode()) {
      case `default`:
        chosenStyles = defaultStyles;
        break;
      case `grey`:
        chosenStyles = greyStyles;
        break;
      case `whitish`:
        chosenStyles = whitishStyles;
        break;
    }
    return chosenStyles;

  }

}

type ModeType = `default` | `grey` | `whitish`;
