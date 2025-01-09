import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-grey',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './link-grey.component.html',
  styleUrl: './link-grey.component.css'
})
export class LinkGreyComponent {
  label = input.required<string>();
  routerLink = input<string>(`#`);
  customClasses = input<string>(``);

  mode = input<ModeType>(`dark`);

  get btnStyles() {
    const darkStyles = `text-white bg-zinc-800 hover:bg-white hover:text-zinc-800 `;
    const whiteRedStyles = `bg-white text-red-500 hover:bg-red-500 hover:text-white `;

    let styles = ``;

    switch (this.mode()) {
      case `dark`:
        styles = darkStyles;
        break;
      case `white-red`:
        styles = whiteRedStyles;
        break;
    }

    return styles;
  }

}

type ModeType = `dark` | `white-red`
