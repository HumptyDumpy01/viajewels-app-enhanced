import { Component, inject, signal } from '@angular/core';
import { JewelryService } from '../../../jewelry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigateToLinkComponent } from '../../../UI/links/navigate-to-link/navigate-to-link.component';
import { ParagraphComponent } from '../../../typography/paragraph/paragraph.component';
import { OrderDetailCardComponent } from '../../../UI/cards/order-detail-card/order-detail-card.component';

@Component({
  selector: 'app-check-out-header',
  imports: [
    NavigateToLinkComponent,
    ParagraphComponent,
    OrderDetailCardComponent
  ],
  standalone: true,
  templateUrl: './check-out-header.component.html',
  styleUrl: './check-out-header.component.css'
})
export class CheckOutHeaderComponent {
  private jewelryService = inject(JewelryService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id = signal(this.route.snapshot.params['id']);

  get jewelDetails() {
    const jewel = this.jewelryService.getJewel(Number(this.id()));
    if (!jewel) {
      this.router.navigate([`/`]).then();
    }
    return jewel;
  }

  getLinkData() {
    const jewelHeading = signal(this.jewelDetails?.itemDetails.heading || '');
    const jewelId = signal(this.jewelDetails?.id || '');
    return {
      jewelHeading: jewelHeading() ? jewelHeading() + ` .` : ``,
      jewelUrl: [`/jewelry`, `${jewelId()}`]
    };
  }
}
