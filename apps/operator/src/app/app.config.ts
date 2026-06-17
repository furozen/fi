import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { apiProviders } from './api-strategy.config';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),

    provideRouter(appRoutes),
    ...apiProviders
  ],
};
