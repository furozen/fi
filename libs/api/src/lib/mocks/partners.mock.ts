import { IPartner } from '../interfaces/models.interface';

export const MOCK_PARTNERS: IPartner[] = [
  { id: 'PARTNER_ALPHA_ID', name: 'Партнер Альфа', status: 'ACTIVE', activeGateways: ['Sber', 'P2P_Gate'] },
  { id: 'PARTNER_BETA_ID', name: 'Партнер Бета', status: 'MAINTENANCE', activeGateways: ['VTB'] }
];
