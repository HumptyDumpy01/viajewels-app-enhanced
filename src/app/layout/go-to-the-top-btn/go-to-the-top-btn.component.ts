import { ChangeDetectorRef, Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { SHOW_FIXED_LAYOUTS } from '../../../utils/vars/variables';

@Component({
  selector: 'app-go-to-the-top-btn',
  imports: [],
  standalone: true,
  templateUrl: './go-to-the-top-btn.component.html',
  styleUrl: './go-to-the-top-btn.component.css'
})
export class GoToTheTopBtnComponent {
  private themeService = inject(ThemeService);
  private cdr = inject(ChangeDetectorRef);
  isVisible = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible.set(scrollPosition > SHOW_FIXED_LAYOUTS);
    this.cdr.detectChanges();
  }

  get theme() {
    return this.themeService.getTheme;
  }

  get btnStyles() {
    const ifLightTheme = 'bg-white border border-zinc-300';
    const ifDarkTheme = 'bg-zinc-800';

    return this.theme === 'light' ? ifLightTheme : ifDarkTheme;
  }

  handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
