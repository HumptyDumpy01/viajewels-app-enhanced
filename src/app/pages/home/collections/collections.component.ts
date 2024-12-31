import { Component } from '@angular/core';
import { CollectionCardComponent } from '../../../UI/cards/collection-card/collection-card.component';
import { ArrowButtonComponent } from '../../../UI/buttons/arrow-button/arrow-button.component';
import { HeadingComponent } from '../../../typography/heading/heading.component';

@Component({
  selector: 'app-collections',
  imports: [CollectionCardComponent, ArrowButtonComponent, HeadingComponent],
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

}
