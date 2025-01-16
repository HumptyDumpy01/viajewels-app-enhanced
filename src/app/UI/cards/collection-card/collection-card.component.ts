import { Component, inject, input } from '@angular/core';
import { LinkGreyComponent } from '../../links/link-grey/link-grey.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { TrimTextPipe } from '../../../pipes/trim-text.pipe';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-collection-card',
  imports: [
    LinkGreyComponent,
    ParagraphComponent,
    TrimTextPipe,
    NgClass
  ],
  standalone: true,
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.css'
})
export class CollectionCardComponent {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  imgData = input.required<ImgDataType>();
  heading = input.required<string>();
  text = input.required<string>();
  isImageVisible = input(true);
  buttonData = input<ButtonDataType>({
    label: 'View Collection',
    href: '#'
  });

  get firstLetterOfText() {
    return this.text()[0];
  }

  get restOfText() {
    return this.text().slice(1);
  }
}

export type ImgDataType = {
  src: string,
  alt: string
}

type ButtonDataType = {
  label: string,
  href: string
}
