import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header[hmHeader]', // <header hmHeader>
  template: `
    <img ngSrc="/assets/logo.svg" priority width="150" height="44" alt="logo" aria-hidden="true" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  styleUrl: './header.css'
})
export class Header {}