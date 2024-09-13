import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"Donuts", component:DonutsComponent},

    {path:"Donuts/:id", component:DonutDetailsComponent},
    {path:"Cart", component:CartComponent},
    {path: "", redirectTo: "/Donuts", pathMatch:"full"},
    {path:"**", component: PageNotFoundComponent}
];
