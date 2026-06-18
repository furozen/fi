import {Routes} from '@angular/router';
import {isAuthGuard} from '@cabinet/auth';
import {brandingConfig} from "@cabinet/brands";
import {SimpleWithIconsComponent} from "@cabinet/payments";

export const appRoutes: Routes = [
  {
    // Защищённая зона: доступ только после авторизации.
    // Без auth -> isAuthGuard возвращает UrlTree на /login.
    path: '',
    canActivate: [isAuthGuard],
    loadComponent: () => import('@cabinet/ui').then(m => m.Dashboard3ColumnLayout),
    children: [
      ...(brandingConfig.enabledFeatures.payments ? [{
        path: '',
        loadComponent: () => import('@cabinet/payments').then(m => m.Payments)
      }] : []),
      {
        path: '',
        loadComponent: () => import('@cabinet/payments').then(m => m.Stats),
        outlet: 'left-sidebar',
        data: { animation: 'LeftDash' }
      },
      {
        path: '',
        loadComponent: () => import('@cabinet/payments').then(m => m.Stats),
        outlet: 'left-sidebar',
        data: { animation: 'LeftDash' }
      },
      {
        path: '',
        loadComponent: () =>  import('@cabinet/payments').then(m => m.SimpleWithIconsComponent),
        outlet: 'right-sidebar',
        data: { animation: 'RightDash' }
      }
    ],

  },

  {

    path: 'analytics',
    canActivate: [isAuthGuard],
    loadComponent: () => import('@cabinet/ui').then(m => m.Dashboard3ColumnLayout),
    children: [
        ...(brandingConfig.enabledFeatures.payments ? [{
          path: '',
          loadComponent: () => import('@cabinet/payments').then(m => m.Payments)
        }] : []),

      {
        path: '',
        loadComponent: () => import('@cabinet/payments').then(m => m.Stats),
        outlet: 'left-sidebar',
        data: { animation: 'LeftDash' }
      },
      {
        path: '',
        loadComponent: () => import('@cabinet/ui').then(m => m.LanguageSwitcherComponent),
        outlet: 'lang-switcher',

      },
      {
        path: '',
        loadComponent: () =>  import('@cabinet/payments').then(m => m.Notices),
        outlet: 'right-sidebar',
        data: { animation: 'RightDash' }
      }
    ],

  },


  {
    path: 'login',
    loadComponent: () => import('@cabinet/ui').then(m => m.MinimalLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('@cabinet/auth').then(m => m.Login)
      }
    ]
  }
];
