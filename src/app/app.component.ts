import { Component } from '@angular/core';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
