import { Component } from '@angular/core';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { StarWhiteIconComponent } from '../../../UI/icons/star-white-icon/star-white-icon.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-review',
  imports: [
    HeadingComponent,
    ParagraphComponent,
    InputControlComponent,
    ViajewelsButtonComponent,
    StarWhiteIconComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './leave-review.component.html',
  styleUrl: './leave-review.component.css'
})
export class LeaveReviewComponent {
  rating = 5;

  leaveReviewForm = new FormGroup({
    email: new FormControl(``, {
      validators: [Validators.email, Validators.required, Validators.maxLength(150)]
    }),
    initials: new FormControl(``, {
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(150)]
    }),
    review: new FormControl(``, {
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(800)]
    })
  });

  setRating(rating: number) {
    this.rating = rating;
  }

  onSubmit() {
  }

}
