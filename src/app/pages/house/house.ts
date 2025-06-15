import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HouseDetails } from '../../components';
import { HouseService } from '../../services';
import { House } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'hm-house-page',
    template: `
        @if (house) {
            <hm-house-details [house]="house"/>
        } @else {
            Объект недвижимости не найден
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HouseDetails]
})
export class HousePage {
    readonly house?: House;
    private readonly houseService: HouseService = inject(HouseService);
    private readonly route: ActivatedRoute = inject(ActivatedRoute);

    constructor() {
        const id = Number(this.route.snapshot.params['id']);

        this.house = this.houseService.getHouseById(id);
    }
}