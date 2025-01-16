import { Component, inject, OnInit, signal } from '@angular/core';
import { CollectionCardComponent } from '../../../UI/cards/collection-card/collection-card.component';
import { ArrowButtonComponent } from '../../../UI/buttons/arrow-button/arrow-button.component';
import { HeadingComponent } from '../../../typography/heading/heading.component';
import { COLLECTIONS } from '../../../../../data/COLLECTIONS';
import { ThemeService } from '../../../services/theme.service';
import { applyThemeClasses } from '../../../../utils/functions/applyThemeClasses';

@Component({
  selector: 'app-collections',
  imports: [CollectionCardComponent, ArrowButtonComponent, HeadingComponent],
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit {
  private themeService = inject(ThemeService);

  get theme() {
    return this.themeService.getTheme;
  }

  collections = signal(COLLECTIONS[0]);
  isImageVisible = signal(true);

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages() {
    COLLECTIONS.forEach(collection => {
      const img = new Image();
      img.src = collection.imgData.src;
    });
  }


  nextCollection() {
    this.isImageVisible.set(false);
    setTimeout(() => {
      if (COLLECTIONS.indexOf(this.collections()) === COLLECTIONS.length - 1) {
        this.collections.set(COLLECTIONS[0]);
      } else {
        this.collections.set(COLLECTIONS[COLLECTIONS.indexOf(this.collections()) + 1]);
      }
      this.isImageVisible.set(true);
    }, 500);
  }

  prevCollection() {
    this.isImageVisible.set(false);
    setTimeout(() => {
      if (COLLECTIONS.indexOf(this.collections()) === 0) {
        this.collections.set(COLLECTIONS[COLLECTIONS.length - 1]);
      } else {
        this.collections.set(COLLECTIONS[COLLECTIONS.indexOf(this.collections()) - 1]);
      }
      this.isImageVisible.set(true);
    }, 500);
  }

  protected readonly applyThemeClasses = applyThemeClasses;
}
