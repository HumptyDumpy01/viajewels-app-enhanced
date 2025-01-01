import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CollectionsComponent } from './collections/collections.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { CardsCarouselComponent } from '../../layout/cards-carousel/cards-carousel.component';
import { ContactSupportTeamComponent } from '../../layout/contact-support-team/contact-support-team.component';
import { JewelryService } from '../../jewelry.service';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, WhyUsComponent, CollectionsComponent, TestimonialsComponent, HeadingComponent, CardsCarouselComponent, ContactSupportTeamComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private jewelryService = inject(JewelryService);


  get jewelry() {
    return this.jewelryService.getJewelry();
  }

  ngOnInit() {
    // scroll to top
    window.scrollTo(0, 0);
  }
}
