import { Component, input } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  imports: [],
  standalone: true,
  templateUrl: './close-icon.component.html',
  styleUrl: './close-icon.component.css'
})
export class CloseIconComponent {
  height = input<number>(56);
  width = input<number>(56);
  color = input<string>('#333333');

  get viewBox() {
    return `0 0 ${this.height()} ${this.width()}`;
  }
}
