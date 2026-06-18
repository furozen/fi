import {Injectable, PLATFORM_ID, inject, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

const STORAGE_KEY = 'cabinet.auth.isAuthenticated';

/**
 * Минимальное signal-based состояние авторизации.
 *
 * SSR-безопасно: на сервере `isAuthenticated` всегда `false`,
 * флаг хранится только в браузерном `localStorage`.
 *
 * Пока реального бэкенда нет — хранится булев флаг.
 * Когда появится токен, заменится значение под тем же ключом,
 * сигнатуры login()/logout() сохранятся.
 */
@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly _isAuthenticated = signal<boolean>(this.readStored());

  /** Read-only флаг текущего состояния авторизации. */
  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  login(): void {
    this.setAuthenticated(true);
  }

  logout(): void {
    this.setAuthenticated(false);
  }

  private setAuthenticated(value: boolean): void {
    this._isAuthenticated.set(value);
    this.persist(value);
  }

  private readStored(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return globalThis.localStorage.getItem(STORAGE_KEY) === 'true';
  }

  private persist(value: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;
    globalThis.localStorage.setItem(STORAGE_KEY, String(value));
  }
}
