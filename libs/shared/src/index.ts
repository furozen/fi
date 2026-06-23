export { LanguageService } from './lib/services/language.service';
// 1. Экспорт Логгера и безопасных утилит JSON
export { createLogger, logging$ } from './lib/utils/logger';
export { shortStringify } from './lib/utils/json-utils';
export type { ILogger } from './lib/utils/logger';


export { DataBusService, Route, DataBusMessageType, DataBusTag } from './lib/services/data-bus.service';
export type { IDataBusMessage, IErrorMessage } from './lib/services/data-bus.service';

