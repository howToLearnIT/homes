import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header[hmHeader]', // <header hmHeader>
  template: `
    <a [routerLink]="['/']">
      <img ngSrc="/assets/logo.svg" priority width="150" height="44" alt="logo" aria-hidden="true" />
    </a>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink],
  styleUrl: './header.css'
})
export class Header {}