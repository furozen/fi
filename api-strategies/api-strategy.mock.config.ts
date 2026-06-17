import { Provider, EnvironmentProviders } from '@angular/core'; // Добавлен импорт
import { provideMockApiEnvironment } from '@cabinet/api';

export const apiProviders: (Provider | EnvironmentProviders)[] = [
  ...provideMockApiEnvironment()
];
