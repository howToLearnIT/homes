import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hm-search',
  template: `
    <form class="form">
        <input type="text" placeholder="Фильтрация по городу" />
        <button hm-primary type="button">Поиск</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './search.css'
})
export class Search {}