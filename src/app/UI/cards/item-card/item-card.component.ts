import { ChangeDetectorRef, Component, inject, input, OnInit, signal } from '@angular/core';
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
import { JewelWishlistService } from '../../../jewel-wishlist.service';
import { JewelryType } from '../../../../../data/JEWELRY';
import { ThemeService } from '../../../theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

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
export class ItemCardComponent implements OnInit {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  private jewelryWishlistService = inject(JewelWishlistService);
  private cdr = inject(ChangeDetectorRef);

  href = input<string>(`#`);
  imgData = input.required<ImgDataType>();
  item = input.required<JewelryType>();
  addedToWishlist = signal<boolean | null>(null);

  ngOnInit() {
    this.updateWishlistStatus();
  }

  imageDimensions = input<string>(`w-[312px] h-[312px]`);
  extraDetailsVisible = input<boolean>(true);
  cardMode = input<CardModeType>(`black`);

  get getRatingArray() {
    const filledStars = Math.floor(this.item().itemDetails.rating);
    const emptyStars = 5 - filledStars;
    return [
      ...Array(filledStars).fill(this.cardMode() === `white` ? `darkFilled` : `filled`),
      ...Array(emptyStars).fill('empty')
    ];
  }

  get firstLetterOfText() {
    return this.item().itemDetails.description[0];
  }

  addItemToWishlist() {
    this.jewelryWishlistService.addToWishlist(this.item());
    this.cdr.detectChanges();
    this.updateWishlistStatus();
  }

  removeItemFromWishlist() {
    this.jewelryWishlistService.removeFromWishlist(this.item());
    this.cdr.detectChanges();
    this.updateWishlistStatus();
  }

  updateWishlistStatus() {
    this.addedToWishlist.set(this.jewelryWishlistService.userHasInWishlist(this.item().id));
  }

  get restOfText() {
    return this.item().itemDetails.description.slice(1);
  }

  get tagStyles() {
    const comingSoon = `bg-red-400`;
    const collection = `bg-zinc-900`;
    const newItem = `bg-purple-400`;

    let chosenStyle = ``;

    if (this.item().itemDetails.tag.includes(`coming-soon`)) {
      chosenStyle = comingSoon;
    }

    if (this.item().itemDetails.tag.includes(`collection`)) {
      chosenStyle = collection;
    }

    if (this.item().itemDetails.tag.includes(`new`)) {
      chosenStyle = newItem;
    }

    return chosenStyle;
  }

  get tagText() {
    const comingSoon = `Coming Soon`;
    const collection = `Collection`;
    const newItem = `New`;

    let chosenText = ``;

    if (this.item().itemDetails.tag.includes(`coming-soon`)) {
      chosenText = comingSoon;
    }
    if (this.item().itemDetails.tag.includes(`collection`)) {
      chosenText = collection;
    }
    if (this.item().itemDetails.tag.includes(`new`)) {
      chosenText = newItem;
    }

    return chosenText;
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}

export type ItemTagType = `coming-soon` | `collection` | `new` | `bracelets` | `necklaces` | `rings` | `earrings`;

export type CardModeType = `black` | `white` | `pure-white-text`;
