import { Component } from '@angular/core';
import {
  LimitedAdditionCircleComponent
} from '../../../typography/limited-addition-circle/limited-addition-circle.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { LinkCircleComponent } from '../../../UI/links/link-circle/link-circle.component';

@Component({
  selector: 'app-hero',
  imports: [
    LimitedAdditionCircleComponent,
    ParagraphComponent,
    LinkCircleComponent
  ],
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
