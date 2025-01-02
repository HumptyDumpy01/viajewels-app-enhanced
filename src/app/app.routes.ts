import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JewelryComponent } from './pages/jewelry/jewelry.component';
import { JewelComponent } from './pages/jewel/jewel.component';

export const routes: Routes = [
  { path: ``, component: HomeComponent, title: `ViaJewels: Welcome to Viajewels!` },
  { path: `jewelry`, component: JewelryComponent, title: `ViaJewels: Explore countless jewelries from viajewels!` },
  { path: `jewelry/:id`, component: JewelComponent },
  // add 404 page
  { path: `**`, redirectTo: `/`, pathMatch: `full` }
];
