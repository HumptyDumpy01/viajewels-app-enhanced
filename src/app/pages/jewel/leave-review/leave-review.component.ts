import { Component, signal, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { StarWhiteIconComponent } from '../../../UI/icons/star-white-icon/star-white-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { validateLeaveReviewForm } from '../../../../utils/schemas/validateLeaveReviewForm';
import { NgIf } from '@angular/common';
import { scrollToTag } from '../../../../utils/functions/scrollToTag';

@Component({
  selector: 'app-leave-review',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent,
    StarWhiteIconComponent,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true,
  templateUrl: './leave-review.component.html',
  styleUrl: './leave-review.component.css'
})
export class LeaveReviewComponent {
  errorMessage = signal<string>(``);
  rating = 5;

  @ViewChild('emailInput') emailInput!: InputControlComponent;
  @ViewChild('initialsInput') initialsInput!: InputControlComponent;
  @ViewChild('reviewInput') reviewInput!: InputControlComponent;

  setRating(rating: number) {
    this.rating = rating;
  }

  onSubmit() {
    const validate = validateLeaveReviewForm.safeParse({
      rating: this.rating,
      email: this.emailInput.getValue(),
      initials: this.initialsInput.getValue(),
      review: this.reviewInput.getValue()
    });

    if (!validate.success) {
      this.errorMessage.set(validate.error.errors[0].message);
      scrollToTag(`.leave-review-par`);
      return;
    }

    this.errorMessage.set(``);

    console.log(`Executing rating: `, this.rating);
    console.log(`Executing email: `, this.emailInput.getValue());
    console.log(`Executing initials: `, this.initialsInput.getValue());
    console.log(`Executing review: `, this.reviewInput.getValue());
  }

}
