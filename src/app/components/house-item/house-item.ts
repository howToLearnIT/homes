import { ChangeDetectionStrategy, Component } from '@angular/core';
import { House } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'li[hmHouseItem], hm-house-item', // <li hmHouseItem> и <hm-house-item>
  template: `
    <div class="photo">
        <img
            [ngSrc]="house.photo"
            alt="Фотография дома {{ house.name }}"
            fill
            priority
        />
    </div>
    <h2 class="title">{{ house.name }}</h2>
    <p class="location">{{ house.city }}, {{ house.state }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './house-item.css',
  imports: [NgOptimizedImage]
})
export class HouseItem {
    house: House = {
        id: 9999,
        name: 'Test Home',
        city: 'Test city',
        state: 'ST',
        photo: 'https://angular.dev/assets/images/tutorials/common/example-house.jpg',
        rooms: 3,
        wifi: true,
        laundry: false,
    };
}