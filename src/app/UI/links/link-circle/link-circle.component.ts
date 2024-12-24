import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkTargetType } from '../../../../utils/generic-types/link.target.type';

@Component({
  selector: 'app-link-circle',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './link-circle.component.html',
  styleUrl: './link-circle.component.css'
})
export class LinkCircleComponent {
  routerLinkHref = input<string>('');
  queryParams = input<{ [k: string]: any }>({});
  linkTarget = input<LinkTargetType>('_self');
  customClasses = input<string>('');
}
