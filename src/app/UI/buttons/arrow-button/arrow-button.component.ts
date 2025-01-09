import { Component, input } from '@angular/core';
import { ArrowIconComponent } from '../../icons/arrow-icon/arrow-icon.component';

@Component({
  selector: 'app-arrow-button',
  imports: [
    ArrowIconComponent
  ],
  standalone: true,
  templateUrl: './arrow-button.component.html',
  styleUrl: './arrow-button.component.css'
})
export class ArrowButtonComponent {
  customIconClasses = input<string>(``);
  btnStyle = input<ButtonType>(`black`);

  get btnStyles() {
    const blackStyle = `bg-zinc-700
    hover:bg-zinc-600 active:bg-zinc-500`;
    const redStyles = `bg-red-500 hover:bg-red-400 active:bg-red-300`;

    let styles = ``;

    switch (this.btnStyle()) {
      case 'black':
        styles = blackStyle;
        break;
      case 'red':
        styles = redStyles;
        break;
    }

    return styles;
  }

}

type ButtonType = 'black' | 'red';
