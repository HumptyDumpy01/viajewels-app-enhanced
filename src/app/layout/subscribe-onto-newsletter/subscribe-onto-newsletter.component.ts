import { Component, input } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../UI/buttons/viajewels-button/viajewels-button.component';

@Component({
  selector: 'app-subscribe-onto-newsletter',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent
  ],
  standalone: true,
  templateUrl: './subscribe-onto-newsletter.component.html',
  styleUrl: './subscribe-onto-newsletter.component.css'
})
export class SubscribeOntoNewsletterComponent {
  background = input<background>(`red`);
}

type background = 'red' | 'purple';
