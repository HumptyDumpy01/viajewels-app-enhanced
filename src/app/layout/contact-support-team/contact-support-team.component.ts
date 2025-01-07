import { Component, signal, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../UI/buttons/viajewels-button/viajewels-button.component';
import { FormsModule } from '@angular/forms';
import { validateContactSupportForm } from '../../../utils/schemas/validateContactSupportForm';
import { NgIf } from '@angular/common';
import { scrollToTag } from '../../../utils/functions/scrollToTag';

@Component({
  selector: 'app-contact-support-team',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent,
    FormsModule,
    NgIf
  ],
  standalone: true,
  templateUrl: './contact-support-team.component.html',
  styleUrl: './contact-support-team.component.css'
})
export class ContactSupportTeamComponent {
  errorMessage = signal<string>(``);
  @ViewChild('emailInput') emailInput!: InputControlComponent;
  @ViewChild('phoneInput') phoneInput!: InputControlComponent;

  onSubmit() {
    const email = this.emailInput.getValue();
    const phone = this.phoneInput.getValue();

    const validateInputs = validateContactSupportForm.safeParse({ email, phone });

    if (!validateInputs.success) {
      this.errorMessage.set(validateInputs.error.errors[0].message);
      scrollToTag(`.support-team-paragraph`);
      return;
    }


    console.log('Email:', email);
    console.log('Phone:', phone);
    // Handle form submission logic here
  }
}
