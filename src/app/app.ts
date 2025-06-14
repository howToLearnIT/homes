import { Component } from '@angular/core';
import { Header } from './components';
import { HomePage } from './pages';

@Component({
  selector: 'app-root',
  template: `
    <header hmHeader></header>
        
    <section class="content">
      <hm-home-page/>
    </section>
  `,
  imports: [Header, HomePage],
  styleUrl: './app.css',
})
export class App {}
