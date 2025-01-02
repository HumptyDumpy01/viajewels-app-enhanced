import { Component, input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-star-white-icon',
  imports: [
    NgIf
  ],
  standalone: true,
  templateUrl: './star-white-icon.component.html',
  styleUrl: './star-white-icon.component.css'
})
export class StarWhiteIconComponent {
  mode = input<ModeType>();
}

type ModeType = `filled` | `transparent`;
