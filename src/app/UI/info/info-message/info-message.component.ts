import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-message',
  imports: [],
  standalone: true,
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css'
})
export class InfoMessageComponent {
  text = input.required<string>();

  get firstLetterOfText() {
    return this.text()[0];
  }

  get restOfText() {
    return this.text().slice(1);
  }
}
