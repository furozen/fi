import { Provider, EnvironmentProviders } from '@angular/core'; // Добавлен импорт
import { provideRealApiEnvironment } from '@cabinet/api';

export const apiProviders: (Provider | EnvironmentProviders)[] = [
  ...provideRealApiEnvironment()
];
