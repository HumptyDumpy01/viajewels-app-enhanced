import { Component, input } from '@angular/core';
import { LinkGreyComponent } from '../../links/link-grey/link-grey.component';

@Component({
  selector: 'app-collection-card',
  imports: [
    LinkGreyComponent
  ],
  standalone: true,
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.css'
})
export class CollectionCardComponent {
  imgData = input.required<ImgDataType>();
  heading = input.required<string>();
  text = input.required<string>();
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

type ImgDataType = {
  src: string,
  alt: string
}

type ButtonDataType = {
  label: string,
  href: string
}
