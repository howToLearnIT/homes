import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { House } from '../../interfaces';

@Component({
    selector: 'hm-house-details',
    template: `
        <section>
            <h1 class="title">{{ house().name }}</h1>
            <p class="location">{{ house().city }}, {{ house().state }}</p>

            <ul class="features">
                <li>Количество комнат: {{ house().rooms }}</li>
                <li>Наличие wi-fi: {{ house().wifi }}</li>
                <li>Наличие прачечной: {{ house().laundry }}</li>
            </ul>
        </section>

        <div class="photo">
            <img
                [ngSrc]="house().photo"
                alt="Фотография дома {{ house().name }}"
                fill
                priority
            />
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './house-details.css',
    imports: [NgOptimizedImage]
})
export class HouseDetails {
    readonly house = input.required<House>();
}