import { Component, EventEmitter, inject, OnInit, Output, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { InputControlComponent } from '../../../UI/controls/input-control/input-control.component';
import { ViajewelsButtonComponent } from '../../../UI/buttons/viajewels-button/viajewels-button.component';
import { StarWhiteIconComponent } from '../../../UI/icons/star-white-icon/star-white-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { validateLeaveReviewForm } from '../../../../utils/schemas/validateLeaveReviewForm';
import { NgIf } from '@angular/common';
import { scrollToTag } from '../../../../utils/functions/scrollToTag';
import { LeaveReviewService } from '../../../leave-review.service';
import { JewelryReviewType } from '../../../../../data/JEWELRY';

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
export class LeaveReviewComponent implements OnInit {
  private leaveReviewService = inject(LeaveReviewService);
  private route = inject(ActivatedRoute);
  errorMessage = signal<string>(``);
  rating = 5;
  jewelId = signal<number | null>(null);

  stage = signal<1 | 2>(1);

  @ViewChild('emailInput') emailInput!: InputControlComponent;
  @ViewChild('initialsInput') initialsInput!: InputControlComponent;
  @ViewChild('reviewInput') reviewInput!: InputControlComponent;

  @Output() reviewSubmitted = new EventEmitter<JewelryReviewType>();

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.jewelId.set(id);
      console.log('id', this.jewelId());
    });
  }

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
    const rating = this.rating;
    const email = this.emailInput.getValue();
    const initials = this.initialsInput.getValue();
    const review = this.reviewInput.getValue();
    const createdAt = new Date().toISOString();

    const newReview: JewelryReviewType = {
      jewelId: this.jewelId()!,
      initials,
      email,
      rated: rating,
      review,
      createAt: createdAt
    };

    this.leaveReviewService.submitReview(this.jewelId()!, initials, email, rating, review, createdAt).subscribe(() => {
      this.reviewSubmitted.emit(newReview);
      this.leaveReviewService.updateJewelReviewRating(this.jewelId()!, rating).subscribe();
      scrollToTag(`.testimonials-component`);
      this.stage.set(2);
    });
  }
}
