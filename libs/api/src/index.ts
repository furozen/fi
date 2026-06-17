import {BasePartnerApiService} from "./lib/concrete/base-partner-api.service";

export { CabinetApiFacade } from './lib/cabinet-api.facade';

import { API_IMPLEMENTATION } from './lib/cabinet-api.facade';
export { API_IMPLEMENTATION } from './lib/cabinet-api.facade';
// другие токены
// import {  AUTH_STRATEGY, DATA_MASKING_CONFIG } from './lib/tokens';

export type { ICabinetApi } from './lib/interfaces/cabinet-api.interface';
export type { IDevCabinetApi } from './lib/interfaces/cabinet-api.interface';

import {EnvironmentProviders, Provider} from '@angular/core';
import {provideHttpClient, withInterceptors } from '@angular/common/http';
import {MockApiService} from "./lib/concrete/mock-api.service";

export const provideRealApiEnvironment = (): (Provider | EnvironmentProviders)[] => [

  provideHttpClient(
    // TODO создать  интерцепторы безопасности
    // withInterceptors([tokenInterceptor])
  ),

  { provide: API_IMPLEMENTATION, useClass: BasePartnerApiService },
  // стратегии авторизации (например, OAuth2 / JWT)
  // TODO
  //{ provide: AUTH_STRATEGY, useClass: WhitestarAuthStrategy },
];

/**
 * МОКОВЫЙ НАБОР ПРОВАЙДЕРОВ (Для автономной разработки и тестов)
 */
export const provideMockApiEnvironment = (): (Provider | EnvironmentProviders)[]  => [

  { provide: API_IMPLEMENTATION, useClass: MockApiService },

];
