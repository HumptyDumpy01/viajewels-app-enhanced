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
}
