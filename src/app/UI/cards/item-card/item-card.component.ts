import { Component, input } from '@angular/core';
import {
  LimitedAdditionCircleComponent
} from '../../../typography/limited-addition-circle/limited-addition-circle.component';
import { StarIconComponent } from '../../icons/star-icon/star-icon.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { RouterLink } from '@angular/router';
import { ImgDataType } from '../collection-card/collection-card.component';
import { CurrencyPipe, DecimalPipe, NgForOf, NgIf } from '@angular/common';
import { TrimTextPipe } from '../../../trim-text.pipe';
import { HeartIconComponent } from '../../icons/heart-icon/heart-icon.component';

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
    DecimalPipe,
    NgIf,
    HeartIconComponent
  ],
  standalone: true,
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  href = input<string>(`#`);
  imgData = input.required<ImgDataType>();
  itemDetails = input.required<ItemDetailsType>();
  addedToWishlist = input.required<boolean>();
  imageDimensions = input<string>(`w-[312px] h-[312px]`);
  extraDetailsVisible = input<boolean>(true);
  cardMode = input<CardModeType>(`black`);

  get getRatingArray() {
    const filledStars = Math.floor(this.itemDetails().rating);
    const emptyStars = 5 - filledStars;
    return [
      ...Array(filledStars).fill(this.cardMode() === `white` ? `darkFilled` : `filled`),
      ...Array(emptyStars).fill('empty')
    ];
  }

  get firstLetterOfText() {
    return this.itemDetails().description[0];
  }

  get restOfText() {
    return this.itemDetails().description.slice(1);
  }

  get tagStyles() {
    const comingSoon = `bg-red-400`;
    const collection = `bg-zinc-900`;
    const newItem = `bg-purple-400`;

    let chosenStyle = ``;

    switch (this.itemDetails().tag) {
      case `coming-soon`:
        chosenStyle = comingSoon;
        break;
      case `collection`:
        chosenStyle = collection;
        break;
      case `new`:
        chosenStyle = newItem;
        break;
      default:
        chosenStyle = ``;
    }

    return chosenStyle;
  }

  get tagText() {
    const comingSoon = `Coming Soon`;
    const collection = `Collection`;
    const newItem = `New`;

    let chosenText = ``;

    switch (this.itemDetails().tag) {
      case `coming-soon`:
        chosenText = comingSoon;
        break;
      case `collection`:
        chosenText = collection;
        break;
      case `new`:
        chosenText = newItem;
        break;
      default:
        chosenText = ``;
    }

    return chosenText;
  }
}


type ItemDetailsType = {
  heading: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  tag: ItemTagType;
}

export type ItemTagType = `coming-soon` | `collection` | `new` | null;

export type CardModeType = `black` | `white`;
