import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JewelryService } from '../../jewelry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { JewelHeaderComponent } from './jewel-header/jewel-header.component';
import { JewelTestimonialsComponent } from './jewel-testimonials/jewel-testimonials.component';
import { LeaveReviewComponent } from './leave-review/leave-review.component';
import { YouMightAlsoLikeComponent } from '../../layout/you-might-also-like/you-might-also-like.component';
import {
  SubscribeOntoNewsletterComponent
} from '../../layout/subscribe-onto-newsletter/subscribe-onto-newsletter.component';
import { RecentSearchesService } from '../../recent-searches.service';
import { ReviewsService } from '../../reviews.service';
import { JewelryReviewType } from '../../../../data/JEWELRY';
import { LoadingParagraphComponent } from '../../UI/info/loading-paragraph/loading-paragraph.component';

@Component({
  selector: 'app-jewel',
  imports: [
    NgIf,
    JewelHeaderComponent,
    JewelTestimonialsComponent,
    LeaveReviewComponent,
    YouMightAlsoLikeComponent,
    SubscribeOntoNewsletterComponent,
    LoadingParagraphComponent
  ],
  standalone: true,
  templateUrl: './jewel.component.html',
  styleUrl: './jewel.component.css'
})
export class JewelComponent implements OnInit {
  private titleService = inject(Title);
  private jewelryService = inject(JewelryService);
  private reviewsService = inject(ReviewsService);
  private recentSearchesService = inject(RecentSearchesService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  reviews: JewelryReviewType[] = [];
  jewelDetails: any;

  ngOnInit() {
    window.scrollTo(0, 0);

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loadJewelDetails(id);
      this.loadReviews(id);
    });
  }

  private loadJewelDetails(id: number) {
    const jewel = this.jewelryService.getJewel(id);
    if (jewel) {
      this.jewelDetails = jewel;
      this.titleService.setTitle(`ViaJewels: Jewel ${jewel.itemDetails.heading}`);
      if (!this.recentSearchesService.userHasInRecentSearches(jewel.id)) {
        this.recentSearchesService.addToRecentSearch(jewel);
      }
    } else {
      this.router.navigate(['/']).then();
    }
  }

  private loadReviews(id: number) {
    this.reviewsService.fetchReviewsByJewelId(id).subscribe((response) => {
      if (response?.status === 'success') {
        this.reviews = response.data as JewelryReviewType[];
      }
    });
  }
}
