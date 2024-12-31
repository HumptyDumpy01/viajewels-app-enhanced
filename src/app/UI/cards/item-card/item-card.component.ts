import { Component, input } from '@angular/core';
import {
  LimitedAdditionCircleComponent
} from '../../../typography/limited-addition-circle/limited-addition-circle.component';
import { StarIconComponent } from '../../icons/star-icon/star-icon.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { RouterLink } from '@angular/router';
import { ImgDataType } from '../collection-card/collection-card.component';
import { CurrencyPipe, DecimalPipe, NgForOf } from '@angular/common';
import { TrimTextPipe } from '../../../trim-text.pipe';

@Component({
  selector: 'app-item-card',
  imports: [
    LimitedAdditionCircleComponent,
    StarIconComponent,
    ParagraphComponent,
    RouterLink,
    CurrencyPipe,
    NgForOf,
    TrimTextPipe,
    DecimalPipe
  ],
  standalone: true,
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  href = input<string>(`#`);
  imgData = input.required<ImgDataType>();
  itemDetails = input.required<ItemDetailsType>();

  get getRatingArray() {
    const filledStars = Math.floor(this.itemDetails().rating);
    const emptyStars = 5 - filledStars;
    return [
      ...Array(filledStars).fill('filled'),
      ...Array(emptyStars).fill('empty')
    ];
  }

  get firstLetterOfText() {
    return this.itemDetails().description[0];
  }

  get restOfText() {
    return this.itemDetails().description.slice(1);
  }
}


type ItemDetailsType = {
  heading: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
}
