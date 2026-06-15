
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICabinetApi } from '@cabinet/api';
import { IPayment, IPartner } from '../interfaces/models.interface';
import { BasePartnerApiService } from './base-partner-api.service';
import {inject, Injectable} from "@angular/core";
import {IApiLogs, IDevCabinetApi} from "../interfaces/cabinet-api.interface";
import {PARTNER_API_IMPLEMENTATION} from "../cabinet-api.facade";

@Injectable()
export class DevApiService implements IDevCabinetApi,IApiLogs {
  private readonly http = inject(HttpClient);

  // inject current White Label API-service
  // can be BaseApiService, or it's child like Partner*ApiService
  private readonly partnerApi = inject(PARTNER_API_IMPLEMENTATION);


  protected readonly devAuditUrl = '/api/v1/dev/advanced-audit';


  getPayments(partnerId: string): Observable<IPayment[]> {
    return this.partnerApi.getPayments(partnerId);
  }

  getPartners(): Observable<IPartner[]> {
    if(!this.partnerApi.getPartners) {
      //TODO move error texts to const
      throw new Error('Данный метод недоступен в текущей конфигурации API ' + this.toErrorLog());
    }
    return this.partnerApi.getPartners();
  }

  getAdvancedAuditLogs(transactionId: string): Observable<any> {
    return this.http.get(`${this.devAuditUrl}?txId=${transactionId}`);
  }

  toErrorLog(): string {
    return ''; // Todo идентификаторы partner и dev
  }
}
