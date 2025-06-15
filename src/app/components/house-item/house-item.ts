import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { House } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'li[hmHouseItem], hm-house-item', // <li hmHouseItem> и <hm-house-item>
  template: `
    <a class="link" [routerLink]="['/house', item().id]">
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
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './house-item.css',
  imports: [NgOptimizedImage, RouterLink]
})
export class HouseItem {
  item = input.required<House>();
}