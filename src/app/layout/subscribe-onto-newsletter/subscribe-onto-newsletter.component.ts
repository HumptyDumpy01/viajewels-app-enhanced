import { Component, input, signal, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../UI/buttons/viajewels-button/viajewels-button.component';
import { validateNewsletterForm } from '../../../utils/schemas/validateNewsletterForm';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-subscribe-onto-newsletter',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent,
    FormsModule,
    NgIf
  ],
  standalone: true,
  templateUrl: './subscribe-onto-newsletter.component.html',
  styleUrl: './subscribe-onto-newsletter.component.css'
})
export class SubscribeOntoNewsletterComponent {
  @ViewChild('emailInput') emailInput!: InputControlComponent;
  background = input<background>(`red`);
  errorMessage = signal<string>(``);

  onSubmit() {
    const validate = validateNewsletterForm.safeParse({ email: this.emailInput.getValue() });
    this.errorMessage.set(``);

    if (!validate.success) {
      this.errorMessage.set(validate.error.errors[0].message);
      return;
    }
    console.log(`Subscribed with email: ${this.emailInput.getValue()}`);

  }

}

type background = 'red' | 'purple';
