import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { HouseItem } from '../house-item';
import { House } from '../../interfaces';

@Component({
  selector: 'ul[hmHouseList]', // <ul hmHouseList>
  template: `
    @for (item of list(); track item.id) {
      <li hmHouseItem [item]="item"></li>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HouseItem],
  styleUrl: './house-list.css'
})
export class HouseList {
  list = input.required<House[]>();
}