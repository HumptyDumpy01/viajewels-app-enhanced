import { Component } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { TestimonialsCardComponent } from '../../../UI/cards/testimonials-card/testimonials-card.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';

@Component({
  selector: 'app-testimonials',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    TestimonialsCardComponent,
    ViajewelsButtonComponent
  ],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  get getTestimonials() {
    return;
  }
}
