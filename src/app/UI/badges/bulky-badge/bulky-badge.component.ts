import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-bulky-badge',
  imports: [],
  standalone: true,
  templateUrl: './bulky-badge.component.html',
  styleUrl: './bulky-badge.component.css'
})
export class BulkyBadgeComponent {
  label = input.required<string>();
  active = input.required<boolean>();
  activeClass = computed(() => this.active() ? `text-white bg-zinc-800` : ``);

}
