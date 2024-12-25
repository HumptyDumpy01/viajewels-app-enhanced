import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhyUsComponent } from './why-us/why-us.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, WhyUsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
