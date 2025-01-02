import { Component, input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-heart-icon',
  imports: [
    NgIf
  ],
  standalone: true,
  templateUrl: './heart-icon.component.html',
  styleUrl: './heart-icon.component.css'
})
export class HeartIconComponent {
  mode = input.required<HeartMode>();
  color = input<ColorType>({
    filled: {
      color: `#FF5555`
    },
    empty: {
      color: `white`
    }
  });
}


type HeartMode = `filled` | `empty`;

type ColorType = {
  filled: {
    color: string
  },
  empty: {
    color: string
  }

}

