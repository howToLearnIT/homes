import { Component } from '@angular/core';
import { Header } from './components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <header hmHeader></header>
        
    <section class="content">
      <router-outlet/>
    </section>
  `,
  imports: [Header, RouterOutlet],
  styleUrl: './app.css',
})
export class App {}
