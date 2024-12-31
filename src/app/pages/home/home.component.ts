import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CollectionsComponent } from './collections/collections.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeadingComponent } from '../../typography/heading/heading.component';
import { CardsCarouselComponent } from '../../layout/cards-carousel/cards-carousel.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, WhyUsComponent, CollectionsComponent, TestimonialsComponent, HeadingComponent, CardsCarouselComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
