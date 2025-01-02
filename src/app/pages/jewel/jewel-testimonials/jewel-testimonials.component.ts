import { Component } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { TestimonialsComponent } from '../../../layout/testimonials/testimonials.component';

@Component({
  selector: 'app-jewel-testimonials',
  imports: [
    HeadingComponent,
    TestimonialsComponent
  ],
  standalone: true,
  templateUrl: './jewel-testimonials.component.html',
  styleUrl: './jewel-testimonials.component.css'
})
export class JewelTestimonialsComponent {
}
