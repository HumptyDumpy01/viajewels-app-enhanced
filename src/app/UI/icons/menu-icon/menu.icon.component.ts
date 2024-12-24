import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  imports: [],
  standalone: true,
  templateUrl: './menu.icon.component.html',
  styleUrl: './menu.icon.component.css'
})
export class MenuIconComponent {
  fill = input(`#525252`);
}
