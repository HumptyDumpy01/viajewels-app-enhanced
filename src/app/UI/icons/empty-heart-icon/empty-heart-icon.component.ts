import { Component, input } from '@angular/core';
import { ThemeType } from '../../theme/toggle-icon/toggle-icon.component';

@Component({
  selector: 'app-empty-heart-icon',
  imports: [],
  standalone: true,
  templateUrl: './empty-heart-icon.component.html',
  styleUrl: './empty-heart-icon.component.css'
})
export class EmptyHeartIconComponent {
  mode = input<ThemeType>('light');
}
