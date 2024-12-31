import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [],
  standalone: true,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  customContainerClasses = input<string>();
  span = input.required<string>();
  spanColor = input<string | null>(null);
  mode = input<modeType>(`light`);

  get headingStyles() {
    const lightStyles = `text-zinc-900`;
    const darkStyles = `text-white`;
    return this.mode() === `dark` ? darkStyles : lightStyles;
  }

  get spanStyles() {
    const lightStyles = `text-amber-600`;
    const darkStyles = `text-amber-500`;

    return this.spanColor() ? this.spanColor() : this.mode() === `dark` ? darkStyles : lightStyles;
  }
}

type modeType = `dark` | `light`;
