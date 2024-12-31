import { Component } from '@angular/core';
import { LinkGreyComponent } from '../../../UI/links/link-grey/link-grey.component';
import { CollectionCardComponent } from '../../../UI/cards/collection-card/collection-card.component';
import { ArrowButtonComponent } from '../../../UI/buttons/arrow-button/arrow-button.component';

@Component({
  selector: 'app-collections',
  imports: [LinkGreyComponent, CollectionCardComponent, ArrowButtonComponent],
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

}
