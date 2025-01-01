import { Component, inject, input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JewelryService } from '../../jewelry.service';

@Component({
  selector: 'app-jewel',
  imports: [],
  standalone: true,
  templateUrl: './jewel.component.html',
  styleUrl: './jewel.component.css'
})
export class JewelComponent implements OnInit {
  id = input<string>();
  private titleService = inject(Title);
  private jewelryService = inject(JewelryService);

  ngOnInit() {
    const jewel = this.jewelryService.getJewel(Number(this.id()));
    this.titleService.setTitle(`ViaJewels: Jewel ${jewel?.itemDetails.heading}`);
  }

}
