import { Injectable, signal } from '@angular/core';
import { ThemeType } from './UI/theme/toggle-icon/toggle-icon.component';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = signal<ThemeType>(this.loadThemeSettsFromLocalStorage());

  private loadThemeSettsFromLocalStorage(): ThemeType {
    const themeJson = localStorage.getItem('theme');
    return themeJson ? JSON.parse(themeJson) : `light`;
  }

  private saveThemeSettsToLocalStorage() {
    localStorage.setItem('theme', JSON.stringify(this.theme()));
  }

  get getTheme() {
    return this.theme();
  }

  changeTheme(theme: ThemeType) {
    this.theme.update(() => {
      this.saveThemeSettsToLocalStorage();
      return theme;
    });
    this.saveThemeSettsToLocalStorage();
  }
}
