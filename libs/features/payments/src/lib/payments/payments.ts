import { Component } from '@angular/core';
import {PaymentTableComponent} from "../simple-table/payment-table.component";

@Component({
  selector: 'lib-payments',
  imports: [
    PaymentTableComponent
  ],
  templateUrl: './payments.html',
  styleUrl: './payments.scss',
})
export class Payments {}
