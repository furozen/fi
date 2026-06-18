import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface SimpleTableUser {
  trans_id: string;
  desc: string;
  status: string;
  merchant: string;
  currency: string;
  amount: string;
  partner:{
    name:string,
    desc:string,
  }

}

const Payment: SimpleTableUser[] = [
  {
    trans_id: '001010011',
    desc: 'IntroQAQ',
    status: 'CANC',
    merchant: 'MERCHANT-BRB-STUB',
    currency: 'EUR',
    amount: '1000.00',
    partner:{
      name:'GoodWill',
      desc: 'low risk',
    }
  },
  {
    trans_id: '001010012',
    desc: 'test fail payment',
    status: 'FAIL',
    merchant: 'MERCHANT-BRB-STUB',
    currency: 'EUR',
    amount: '0.01',
    partner:{
      name:'BadBadMoneyMaker',
      desc: 'High risk',
    }
  },
  {
    trans_id: '001010013',
    desc: 'Пополнение №31',
    status: 'SCS',
    merchant: 'MERCHANT-BRB-STUB',
    currency: 'EUR',
    amount: '9999.99',
    partner:{
      name:'China good quality PRO UX',
      desc: 'Ultra-high risk',
    }
  },
  {
    trans_id: '001010014',
    desc: 'XNJ0-EWW9-XQF6-DKW1-WIS7-SEN1-22',
    status: 'SCS',
    merchant: 'MERCHANT-BRB-STUB',
    currency: 'EUR',
    amount: '10000000000.00',
    partner:{
      name:'Ilon Musk',
      desc: 'Можно не платить, денег как грязи',
    }
  },
  {
    trans_id: '001010015',
    desc: 'ЗА ОТДЫХ!!',
    status: 'SCS',
    merchant: 'MERCHANT-BRB-STUB',
    currency: 'EUR',
    amount: '999999.99',
    partner:{
      name:'Sochi Hotel Lazurnyj',
      desc: 'Low risk',
    }
  },
  {
    trans_id: '001010011',
    desc: 'шильдик на правую заднюю дверь',
    status: 'CANC',
    merchant: 'MERCHANT-BRB-STUB',
    currency: 'EUR',
    amount: '300.00',
    partner:{
      name:'BMW Gmbh',
      desc: 'High risk',
    }
  },
];

@Component({
  selector: 'payment-table',
  templateUrl: './payment-table.component.html',
  imports: [MatTableModule],
})
export class PaymentTableComponent {
  displayedColumns: string[] = ['trans_id', 'desc', 'status', 'currency','amount','merchant'];
  dataSource = Payment;
}
