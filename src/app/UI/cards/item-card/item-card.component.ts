import { Component, input } from '@angular/core';
import {
  LimitedAdditionCircleComponent
} from '../../../typography/limited-addition-circle/limited-addition-circle.component';
import { StarIconComponent } from '../../icons/star-icon/star-icon.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { RouterLink } from '@angular/router';
import { ImgDataType } from '../collection-card/collection-card.component';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [
    LimitedAdditionCircleComponent,
    StarIconComponent,
    ParagraphComponent,
    RouterLink
  ],
  standalone: true,
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  href = input<string>(`#`);
  imgData = input.required<ImgDataType>();
  itemDetails = input.required<ItemDetailsType>();

  get getFormattedPrice() {
    return formatCurrency(this.itemDetails().price, 'en-US', '$');
  }
}


type ItemDetailsType = {
  heading: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
}
