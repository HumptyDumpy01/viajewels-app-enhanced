import { Injectable } from '@angular/core';
import { JEWELRY, JewelryType } from '../../data/JEWELRY';

@Injectable({
  providedIn: 'root'
})
export class JewelryService {
  jewelry: JewelryType[] = JEWELRY;

  getJewelry() {
    return this.jewelry;
  }

  getJewel(id: number) {
    return this.jewelry.find(jewel => jewel.id === id);
  }
}
