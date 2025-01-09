import { Component, input } from '@angular/core';

@Component({
  selector: 'app-toggle-icon',
  imports: [],
  standalone: true,
  templateUrl: './toggle-icon.component.html',
  styleUrl: './toggle-icon.component.css'
})
export class ToggleIconComponent {
  theme = input<ThemeType>('light');
}

export type ThemeType = 'light' | 'dark';
