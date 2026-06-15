import {Route, Routes} from '@angular/router';
import {MinimalLayout} from "@cabinet/ui";

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@cabinet/ui').then(m => m.MinimalLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('@cabinet/payments').then(m => m.Payments)
      },
      {
        path: 'login',
        loadComponent: () => import('@cabinet/auth').then(m => m.Login)
      }
    ]
  }
];
