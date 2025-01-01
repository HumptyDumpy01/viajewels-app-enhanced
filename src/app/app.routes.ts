import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JewelryComponent } from './pages/jewelry/jewelry.component';

export const routes: Routes = [
  { path: ``, component: HomeComponent, title: `Welcome to Viajewels!` },
  { path: `jewelry`, component: JewelryComponent, title: `Explore countless jewelries from viajewels!` }
];
