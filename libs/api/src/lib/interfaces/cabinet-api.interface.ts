import { Observable } from 'rxjs';
import {IPartner, IPayment, IRmqMessage} from "./models.interface";

export interface ICabinetApi {
  getPayments(partnerId: string): Observable<IPayment[]>;
  getPartners?(): Observable<IPartner[]>; // Опционально (только для админов/разработчиков)
  getRmqMessages?(): Observable<IRmqMessage[]>; // Опционально (только для Developer)
}

export interface IDevCabinetApi  extends ICabinetApi {
  getAdvancedAuditLogs?(transactionId: string): Observable<any>;
}

export interface IApiLogs {
  toErrorLog():string;
}
