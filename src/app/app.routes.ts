import {Routes} from '@angular/router';
import {HouseListPage, HousePage} from './pages';

export const routes: Routes = [
    {
        path: '',
        component: HouseListPage,
    },
    {
        path: 'house/:id',
        component: HousePage,
    },
];