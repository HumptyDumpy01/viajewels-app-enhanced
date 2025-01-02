import { Component, input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [
    NgForOf
  ],
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  summary = input.required<string>();
  text = input.required<string[]>();
  open = input<boolean>(false);
}
