import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { NotFoundComponent } from './pages/error/404.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
  /** Paths of pages */
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  {
    path: 'customer',
    children: [{ path: ':id', component: TestComponent }],
  },

  /** 404 Page */
  { path: '**', component: NotFoundComponent },
];
