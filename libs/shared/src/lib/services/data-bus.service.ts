// libs/shared/src/lib/services/data-bus.service.ts
import { Injectable, OnDestroy, signal } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

// --- ОРИГИНАЛЬНЫЕ КОНТРАКТЫ ИЗ ВАШЕГО ПРОЕКТА ---
export enum ErrorId {
  HandShakeFail = 'HandShakeFail',
  Clear = 'Clear',
  SocketConnectionFail = '',
  VideoDeviceIsNotFound = 'VideoDeviceIsNotFound'
}

export interface IErrorMessage {
  id: ErrorId;
  description?: string;
  data?: any;
}

export enum Route {
  Inner = 'Inner',
  Inward = 'Inward',
  Outward = 'Outward',
  ControlSignals = 'ControlSignals'
}

// Адаптированные под финтех-мониторинг Cabinet типы сообщений
export enum DataBusMessageType {
  OperationStuck = 'OperationStuck',       // Обнаружен затык операции партнера
  OperationResolved = 'OperationResolved',   // Операция успешно протолкнута/исправлена
  PartnerConfigChanged = 'PartnerConfigChanged', // Изменились лимиты/комиссии бренда
  GatewayStatusChange = 'GatewayStatusChange',   // Сбой платежного шлюза
  UiThemeToggle = 'UiThemeToggle'           // Системное событие смены темы
}

export enum DataBusTag {
  SendToPartner = 'SendToPartner',
  ReceiveFromGateway = 'ReceiveFromGateway',
  AdminAction = 'AdminAction',
  SystemLog = 'SystemLog'
}

export interface IDataBusMessage {
  type: DataBusMessageType;
  tags: { [tag: string]: any };
  route: Route[];
  senderId?: string;
  userId?: string;
  sign?: string;
  data: any;
}

@Injectable({
  providedIn: 'root', // Шина доступна глобально как синглтон во всем воркспейсе
})
export class DataBusService implements OnDestroy {
  // Базовый Subject для трансляции сообщений
  private readonly dataBus = new Subject<IDataBusMessage>();
  readonly dataBus$ = this.dataBus.asObservable();

  // Оригинальная фильтрация потоков по роутам
  readonly inward$ = this.dataBus$.pipe(filter(msg => msg.route.includes(Route.Inward)));
  readonly outward$ = this.dataBus$.pipe(filter(msg => msg.route.includes(Route.Outward)));
  readonly inner$ = this.dataBus$.pipe(filter(msg => msg.route.includes(Route.Inner)));

  // Автономная шина ошибок
  private readonly errorBus = new Subject<IErrorMessage>();
  readonly errorBus$ = this.errorBus.asObservable();

  send(message: IDataBusMessage): void {
    this.dataBus.next(message);
  }

  sendError(errorMessage: IErrorMessage): void {
    this.errorBus.next(errorMessage);
  }

  ngOnDestroy(): void {
    // В Zoneless приложении чистим Subject при уничтожении контекста
    this.dataBus.complete();
    this.errorBus.complete();
  }
}
