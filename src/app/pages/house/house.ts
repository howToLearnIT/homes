import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'hm-house-page',
    template: `
        House
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousePage {}