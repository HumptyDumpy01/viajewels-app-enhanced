import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  imports: [],
  standalone: true,
  templateUrl: './star-icon.component.html',
  styleUrl: './star-icon.component.css'
})
export class StarIconComponent {
  mode = input<ModeType>(`filled`);

  get starStyles() {
    const filled = `#D19E40`;
    const empty = `rgba(209, 158, 64, 0.30)`;
    return this.mode() === `filled` ? filled : empty;
  }
}

type ModeType = `filled` | `empty`
