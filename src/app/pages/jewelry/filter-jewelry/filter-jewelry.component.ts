import { Component } from '@angular/core';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { StarIconComponent } from '../../../UI/icons/star-icon/star-icon.component';
import { BulkyBadgeComponent } from '../../../UI/badges/bulky-badge/bulky-badge.component';
import { RedBulkyButtonComponent } from '../../../UI/buttons/red-bulky-button/red-bulky-button.component';

@Component({
  selector: 'app-filter-jewelry',
  imports: [
    InputControlComponent,
    StarIconComponent,
    BulkyBadgeComponent,
    RedBulkyButtonComponent
  ],
  standalone: true,
  templateUrl: './filter-jewelry.component.html',
  styleUrl: './filter-jewelry.component.css'
})
export class FilterJewelryComponent {

}
