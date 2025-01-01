import { Component } from '@angular/core';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { StarIconComponent } from '../../../UI/icons/star-icon/star-icon.component';

@Component({
  selector: 'app-filter-jewelry',
  imports: [
    InputControlComponent,
    StarIconComponent
  ],
  standalone: true,
  templateUrl: './filter-jewelry.component.html',
  styleUrl: './filter-jewelry.component.css'
})
export class FilterJewelryComponent {

}
