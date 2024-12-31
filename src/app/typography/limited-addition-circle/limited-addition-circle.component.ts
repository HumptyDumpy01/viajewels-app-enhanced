import { Component, input } from '@angular/core';

@Component({
  selector: 'app-limited-addition-circle',
  imports: [],
  standalone: true,
  templateUrl: './limited-addition-circle.component.html',
  styleUrl: './limited-addition-circle.component.css'
})
export class LimitedAdditionCircleComponent {
  customClasses = input<string>(``);
  fillColor = input<string>(`black`);
}
