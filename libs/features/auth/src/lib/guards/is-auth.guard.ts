import {inject} from '@angular/core';
import {CanMatchFn, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

/**
 * Functional guard: пускает к маршруту только аутентифицированного
 * пользователя, иначе декларативно редиректит на `/login` (через UrlTree).
 */
export const isAuthGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAuthenticated() ? true : router.createUrlTree(['/login']);
};
