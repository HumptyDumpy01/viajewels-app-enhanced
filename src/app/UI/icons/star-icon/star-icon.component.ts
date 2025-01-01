import { Component, input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  imports: [],
  standalone: true,
  templateUrl: './star-icon.component.html',
  styleUrl: './star-icon.component.css'
})
export class StarIconComponent {
  mode = input<ModeType>(`filled`);
  dimensions = input.required<DimensionsType>();

  get starStyles() {
    const filled = `#D19E40`;
    const darkFilled = `#C27E00`;
    const empty = `rgba(209, 158, 64, 0.30)`;
    return this.mode() === `filled` ? filled : this.mode() === `darkFilled` ? darkFilled : empty;
  }

  get starDimensions(): StarDimensionsType {
    const viewBox = this.dimensions() === `md` ? '0 0 29 27' : '0 0 23 21';
    const width = this.dimensions() === `md` ? 29 : 23;
    const height = this.dimensions() === `md` ? 27 : 21;
    const pathD = this.dimensions() === `md` ? `M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z` : `M11.4171 0.0828857L13.9804 7.97191L22.2754 7.97191L15.5646 12.8476L18.1279 20.7366L11.4171 15.8609L4.7063 20.7366L7.26959 12.8476L0.558793 7.97191L8.8538 7.97191L11.4171 0.0828857Z`;
    return { viewBox, width, height, pathD };
  }
}

type ModeType = `filled` | `darkFilled` | `empty`;

type StarDimensionsType = { viewBox: string, width: number, height: number, pathD: string };

type DimensionsType = `sm` | `md`;
