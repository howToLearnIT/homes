import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HouseItem } from '../house-item';

@Component({
  selector: 'ul[hmHouseList]', // <ul hmHouseList>
  template: `
    <li hmHouseItem></li>
    <li hmHouseItem></li>
    <li hmHouseItem></li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HouseItem],
  styleUrl: './house-list.css'
})
export class HouseList {}