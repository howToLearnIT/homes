import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Search } from '../../components';

@Component({
  selector: 'hm-home-page',
  template: `
    <hm-search />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Search]
})
export class HomePage {}