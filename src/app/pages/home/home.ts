import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Search, HouseList } from '../../components';

@Component({
  selector: 'hm-home-page',
  template: `
    <hm-search />
    <ul class="list" hmHouseList></ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Search, HouseList],
  styleUrl: './home.css'
})
export class HomePage {}