import { Routes } from '@angular/router';
import { ListAllCarsComponent } from './list-all-cars/list-all-cars.component';

export const routes: Routes = [
    {path: '', redirectTo:'all-cars', pathMatch:'full'},
    {path:'all-cars', component: ListAllCarsComponent}
];
