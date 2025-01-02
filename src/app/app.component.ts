import { Component, inject, OnInit } from '@angular/core';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  /* IMPORTANT: NEEDS CLOSE ATTENTION: BEHAVIOUR CAN BE UNPREDICTED
  *   AND WORSEN USER EXPERIENCE*/
  ngOnInit() {
    // whenever the URL changes, scroll to the top of the page,
    // this is required because when I click on e.g. some cards below when
    // I browse the page, the page does not scroll to the top of the page though
    // the data completely changed.
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
