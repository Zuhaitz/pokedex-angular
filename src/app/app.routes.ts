import { Routes } from '@angular/router';

import { BaseLayoutComponent, ContentLayoutComponent } from './layouts';
import {
  AboutComponent,
  HomeComponent,
  PokemonDetailsComponent,
} from './pages';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: ContentLayoutComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'pokemon/:id', component: PokemonDetailsComponent },
        ],
      },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
