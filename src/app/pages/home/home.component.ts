import { Component, computed, inject, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CollectionsComponent } from './collections/collections.component';
import { TestimonialsComponent } from '../../layout/testimonials/testimonials.component';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { CardsCarouselComponent } from '../../layout/cards-carousel/cards-carousel.component';
import { ContactSupportTeamComponent } from '../../layout/contact-support-team/contact-support-team.component';
import { JewelryService } from '../../jewelry.service';
import { ParagraphComponent } from '../../typography/paragraph/paragraph.component';
import { CustomerTestimonialsComponent } from './customer-testimonials/customer-testimonials.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, WhyUsComponent, CollectionsComponent, TestimonialsComponent, HeadingComponent, CardsCarouselComponent, ContactSupportTeamComponent, ParagraphComponent, CustomerTestimonialsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private jewelryService = inject(JewelryService);


  get jewelry() {
    return this.jewelryService.getJewelry();
  }


  testimonialData = computed(() => this.jewelryService.getJewelry().filter((j) =>
    j.reviews!.length > 0));

  get getTestimonials() {
    // gather all reviews onto a single array and return it
    const reviews = this.testimonialData().map((j) => j.reviews).flat()
      .filter((r) => r!.rated >= 4).slice(0, 4);

    return reviews!;
  }

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);
  }
}
