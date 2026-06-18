import {Injectable, PLATFORM_ID, inject, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {brandingConfig} from '@cabinet/brands';

const STORAGE_KEY = 'cabinet.language';
const DEFAULT_LANGUAGE = 'en';

/**
 * Управление текущим языком приложения.
 *
 * Список доступных языков берётся из `brandingConfig.supportedLanguages`.
 * Текущий язык персистится в `localStorage` (SSR-безопасно).
 * При отсутствии сохранённого значения или пустом списке поддерживаемых
 * языков используется `DEFAULT_LANGUAGE` ('en').
 */
@Injectable({providedIn: 'root'})
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);

  /** Массив языков, разрешённых для текущего бренда. */
  readonly supportedLanguages = brandingConfig.supportedLanguages;

  /** Текущий выбранный язык (read-only сигнал). */
  private readonly _currentLanguage = signal<string>(this.readStored());
  readonly currentLanguage = this._currentLanguage.asReadonly();

  /** Установить язык по коду (например 'en', 'ru', 'de'). */
  setLanguage(lang: string): void {
    if (!this.supportedLanguages.includes(lang)) {
      console.warn(`Language "${lang}" is not in supported list`, this.supportedLanguages);
      return;
    }
    this._currentLanguage.set(lang);
    this.persist(lang);
  }

  private readStored(): string {
    if (!isPlatformBrowser(this.platformId)) return DEFAULT_LANGUAGE;
    const stored = globalThis.localStorage.getItem(STORAGE_KEY);
    if (stored && this.supportedLanguages.includes(stored)) return stored;
    return DEFAULT_LANGUAGE;
  }

  private persist(lang: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    globalThis.localStorage.setItem(STORAGE_KEY, lang);
  }
}
