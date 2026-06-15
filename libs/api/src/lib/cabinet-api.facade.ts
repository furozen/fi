import { Injectable, InjectionToken, inject } from '@angular/core';
import {ICabinetApi, IDevCabinetApi} from './interfaces/cabinet-api.interface';


// Токены, через которые подменяются реализации на этапе сборки
export const API_IMPLEMENTATION = new InjectionToken<ICabinetApi>('ApiImplementation');
export const DEV_API_IMPLEMENTATION = new InjectionToken<IDevCabinetApi>('DevApiImplementation');
export const PARTNER_API_IMPLEMENTATION = new InjectionToken<ICabinetApi>('PartnerApiImplementation');


@Injectable({ providedIn: 'root' })
export class CabinetApiFacade implements IDevCabinetApi {
  //  concrete realization of api
  private api: ICabinetApi = inject(API_IMPLEMENTATION);
  private devApi: IDevCabinetApi = inject(DEV_API_IMPLEMENTATION);


  getPayments(partnerId: string) {
    return this.api.getPayments(partnerId);
  }

  getPartners() {
    if (!this.api.getPartners) {
      //TODO move error texts to const
      throw new Error('Данный метод недоступен в текущей конфигурации API');
    }
    return this.api.getPartners();
  }


  getRmqMessages() {
    if (!this.api.getRmqMessages) {
      //TODO move error texts to const
      throw new Error('Данный метод недоступен в текущей конфигурации API');
    }
    return this.api.getRmqMessages();
  }

  getAdvancedAuditLogs(transactionId:string) {
    if (!this.devApi.getAdvancedAuditLogs) {
      //TODO move error texts to const
      throw new Error('Данный метод недоступен в текущей конфигурации API');
    }
    return this.devApi.getAdvancedAuditLogs(transactionId);
  }
}
