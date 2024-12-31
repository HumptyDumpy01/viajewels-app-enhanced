import { Component } from '@angular/core';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { CircularBadgeComponent } from '../../../UI/badges/circular-badge/circular-badge.component';
import { HeadingComponent } from '../../../typography/heading/heading.component';

@Component({
  selector: 'app-why-us',
  imports: [
    ParagraphComponent,
    CircularBadgeComponent,
    HeadingComponent
  ],
  standalone: true,
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {

}
