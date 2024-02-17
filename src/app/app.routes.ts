import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
// import { CustomerComponent } from './pages/customer/customer.component';
import { NotFoundComponent } from './pages/error/404.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  /** Paths of pages */
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  // {
  //   path: 'customer',
  //   children: [{ path: ':id', component: TestComponent }],
  // },
  /** 404 Page */
  { path: '**', component: NotFoundComponent },
];
