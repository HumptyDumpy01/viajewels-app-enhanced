import { Component } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { StarIconComponent } from '../../../UI/icons/star-icon/star-icon.component';
import { TestimonialsCardComponent } from '../../../UI/cards/testimonials-card/testimonials-card.component';

@Component({
  selector: 'app-testimonials',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    StarIconComponent,
    TestimonialsCardComponent
  ],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

}
