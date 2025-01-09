import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JewelryComponent } from './pages/jewelry/jewelry.component';
import { JewelComponent } from './pages/jewel/jewel.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { SuccessComponent } from './pages/success/success.component';

export const routes: Routes = [
  { path: ``, component: HomeComponent, title: `ViaJewels: Welcome to Viajewels!` },
  { path: `jewelry`, component: JewelryComponent, title: `ViaJewels: Explore countless jewelries from viajewels!` },
  { path: `jewelry/:id`, component: JewelComponent },
  { path: `checkout`, component: CheckOutComponent, title: `ViaJewels: Check out your favorite jewelry!` },
  { path: `success`, component: SuccessComponent, title: `Thanks for the purchase at ViaJewels!` },
  // add 404 page
  { path: `**`, redirectTo: `/`, pathMatch: `full` }
];
