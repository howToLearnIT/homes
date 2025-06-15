import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { House } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'li[hmHouseItem], hm-house-item', // <li hmHouseItem> и <hm-house-item>
  template: `
    <div class="photo">
        <img
            [ngSrc]="item().photo"
            alt="Фотография дома {{ item().name }}"
            fill
            priority
        />
    </div>
    <h2 class="title">{{ item().name }}</h2>
    <p class="location">{{ item().city }}, {{ item().state }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './house-item.css',
  imports: [NgOptimizedImage]
})
export class HouseItem {
  item = input.required<House>();
}