import { Component, input } from '@angular/core';
import { ThemeType } from '../../theme/toggle-icon/toggle-icon.component';

@Component({
  selector: 'app-chevron-icon',
  imports: [],
  standalone: true,
  templateUrl: './chevron-icon.component.html',
  styleUrl: './chevron-icon.component.css'
})
export class ChevronIconComponent {
  mode = input<ThemeType>(`light`);
}
