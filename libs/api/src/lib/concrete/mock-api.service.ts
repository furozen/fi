import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ICabinetApi } from '../interfaces/cabinet-api.interface';
import { IPayment, IPartner, IRmqMessage } from '../interfaces/models.interface';

import { MOCK_PAYMENTS } from '../mocks/payments.mock';
import { MOCK_PARTNERS } from '../mocks/partners.mock';


@Injectable()
export class MockApiService implements ICabinetApi {

  private readonly SIMULATED_DELAY = 400;

  getPayments(partnerId: string): Observable<IPayment[]> {
    const filtered = MOCK_PAYMENTS.filter(p => p.partnerId === partnerId);
    return of(filtered).pipe(delay(this.SIMULATED_DELAY));
  }

  getPartners(): Observable<IPartner[]> {
    return of(MOCK_PARTNERS).pipe(delay(this.SIMULATED_DELAY));
  }

}
