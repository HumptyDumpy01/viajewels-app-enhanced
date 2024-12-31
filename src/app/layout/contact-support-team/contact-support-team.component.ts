import { Component } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../UI/buttons/viajewels-button/viajewels-button.component';

@Component({
  selector: 'app-contact-support-team',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent
  ],
  standalone: true,
  templateUrl: './contact-support-team.component.html',
  styleUrl: './contact-support-team.component.css'
})
export class ContactSupportTeamComponent {

}
