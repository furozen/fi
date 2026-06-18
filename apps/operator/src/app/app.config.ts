import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {apiProviders} from "../../../../api-strategies/api-strategy.config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(), //TODO remove it

    provideRouter(appRoutes),
    ...apiProviders
  ],
};
