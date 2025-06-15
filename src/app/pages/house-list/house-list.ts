import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Search, HouseList } from '../../components';
import { HouseService } from '../../services';
import { House } from '../../interfaces';

@Component({
  selector: 'hm-house-list-page',
  template: `
    <hm-search />
    <ul class="list" hmHouseList [list]="houseList"></ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Search, HouseList],
  styleUrl: './house-list.css'
})
export class HouseListPage {
  houseList: House[] = [];

  private readonly houseService: HouseService = inject(HouseService);

  constructor() {
    this.houseList = this.houseService.getHouseList();
  }
}