import { Routes } from '@angular/router';
import { ListAllCarsComponent } from './components/list-all-cars/list-all-cars.component';
import { CarEvaluationComponent } from './components/car-evaluation/car-evaluation.component';

export const routes: Routes = [
    {path: '', redirectTo:'evaluation', pathMatch:'full'},
    {path:'all-cars', component: ListAllCarsComponent},
    {path:'evaluation', component: CarEvaluationComponent},
];
