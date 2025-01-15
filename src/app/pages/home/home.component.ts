import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CollectionsComponent } from './collections/collections.component';
import { CardsCarouselComponent } from '../../layout/cards-carousel/cards-carousel.component';
import { ContactSupportTeamComponent } from '../../layout/contact-support-team/contact-support-team.component';
import { JewelryService } from '../../jewelry.service';
import { CustomerTestimonialsComponent } from './customer-testimonials/customer-testimonials.component';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { ReviewsService } from '../../reviews.service';
import { JewelryReviewType } from '../../../../data/JEWELRY';
import { LoadingParagraphComponent } from '../../UI/info/loading-paragraph/loading-paragraph.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, WhyUsComponent, CollectionsComponent, CardsCarouselComponent, ContactSupportTeamComponent, CustomerTestimonialsComponent, HeadingComponent, LoadingParagraphComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private jewelryService = inject(JewelryService);
  private reviewsService = inject(ReviewsService);
  private destroyRef = inject(DestroyRef);

  get jewelry() {
    return this.jewelryService.getJewelry();
  }


  testimonialData = signal<JewelryReviewType[]>([]);

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);

    const reviews = this.reviewsService.fetchHighReviews().subscribe({
      next: (reviews) => {
        this.testimonialData.set((reviews));
      }
    });
    this.destroyRef.onDestroy(() => {
      reviews.unsubscribe();
    });
  }
}
