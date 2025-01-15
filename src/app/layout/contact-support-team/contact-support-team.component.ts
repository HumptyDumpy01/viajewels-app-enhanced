import { Component, inject, signal, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../UI/buttons/viajewels-button/viajewels-button.component';
import { FormsModule } from '@angular/forms';
import { validateContactSupportForm } from '../../../utils/schemas/validateContactSupportForm';
import { NgIf } from '@angular/common';
import { scrollToTag } from '../../../utils/functions/scrollToTag';
import { SupportTicketService } from '../../support-ticket.service';

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
  stage = signal<1 | 2>(1);
  errorMessage = signal<string>(``);
  @ViewChild('emailInput') emailInput!: InputControlComponent;
  @ViewChild('phoneInput') phoneInput!: InputControlComponent;

  private supportTicketService = inject(SupportTicketService);

  onSubmit() {
    const email = this.emailInput.getValue();
    const phone = this.phoneInput.getValue();

    const validateInputs = validateContactSupportForm.safeParse({ email, phone });

    if (!validateInputs.success) {
      this.errorMessage.set(validateInputs.error.errors[0].message);
      scrollToTag(`.support-team-paragraph`);
      return;
    }

    this.supportTicketService.submitSupportTicket(email, phone).subscribe({
      next: () => {
        this.stage.set(2);
      },
      error: () => {
        this.errorMessage.set('An error occurred while submitting the form. Please try again later.');
        scrollToTag(`.support-team-paragraph`);
      }
    });
  }
}
