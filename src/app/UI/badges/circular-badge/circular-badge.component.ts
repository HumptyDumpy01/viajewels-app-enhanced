import { Component, input } from '@angular/core';

@Component({
  selector: 'app-circular-badge',
  imports: [],
  standalone: true,
  templateUrl: './circular-badge.component.html',
  styleUrl: './circular-badge.component.css'
})
export class CircularBadgeComponent {
  color = input.required<CircularBadgeComponentColor>();

  customClasses = input<string>();

  get getColorClasses() {
    const blackColorStyle = `bg-zinc-900 text-white`;
    const whitishColorStyles = `border border-zinc-800 text-zinc-800`;
    const orangeColorStyles = `text-white bg-amber-600`;
    switch (this.color()) {
      case `black`:
        return blackColorStyle;
      case `whitish`:
        return whitishColorStyles;
      case `orange`:
        return orangeColorStyles;
    }
  }

}

export type CircularBadgeComponentColor = `black` | `whitish` | `orange`;
