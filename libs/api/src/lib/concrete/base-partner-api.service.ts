import {inject, Injectable} from "@angular/core";
import {ICabinetApi} from "@cabinet/api";
import {HttpClient} from "@angular/common/http";
import {IPartner, IPayment} from "../interfaces/models.interface";
import {Observable} from "rxjs";

@Injectable()
export class BasePartnerApiService implements ICabinetApi {
  name: string = 'BasePartnerApiService';
  protected http = inject(HttpClient);

  protected paymentsUrl = `/api/v1/payments`;
  protected partnersUrl = `/api/v1/partners`;

  getPayments(partnerId: string) {
    return this.http.get<IPayment[]>(`${this.paymentsUrl}?partnerId=${partnerId}`);
  }
  getPartners(): Observable<IPartner[]> {
    return this.http.get<IPartner[]>(`${this.partnersUrl}`);
  }

}
