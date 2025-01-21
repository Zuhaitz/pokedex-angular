import { Routes } from '@angular/router';

import { BaseLayoutComponent } from './layouts';
import { HomeComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
