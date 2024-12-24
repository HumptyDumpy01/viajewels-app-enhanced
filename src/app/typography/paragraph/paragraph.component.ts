import { Component, input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  imports: [],
  standalone: true,
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css'
})
export class ParagraphComponent {
  customClasses = input<string>(``);
}
