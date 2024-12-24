import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { ParagraphComponent } from './typography/paragraph/paragraph.component';
import { LimitedAdditionCircleComponent } from './typography/limited-addition-circle/limited-addition-circle.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, ParagraphComponent, LimitedAdditionCircleComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
