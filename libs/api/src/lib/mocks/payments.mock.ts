import { IPayment } from '../interfaces/models.interface';

export const MOCK_PAYMENTS: IPayment[] = [
  { id: 'tx_001', partnerId: 'PARTNER_ALPHA_ID', amount: 15000, currency: 'RUB', status: 'SUCCESS', type: 'CARD', createdAt: '2026-06-13T12:00:00Z' },
  { id: 'tx_002', partnerId: 'PARTNER_ALPHA_ID', amount: 3200, currency: 'RUB', status: 'ERROR_STUCK', type: 'P2P', errorMessage: 'Timeout от шлюза СБП', createdAt: '2026-06-13T14:30:00Z' },
  { id: 'tx_003', partnerId: 'PARTNER_BETA_ID', amount: 45000, currency: 'USD', status: 'REJECTED', type: 'CARD', errorMessage: '3D-Secure Failed', createdAt: '2026-06-13T15:15:00Z' }
];
