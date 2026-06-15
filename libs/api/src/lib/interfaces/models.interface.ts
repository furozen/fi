export interface IPayment {
  id: string;
  partnerId: string;
  amount: number;
  currency: string;
  status: 'SUCCESS' | 'PENDING' | 'REJECTED' | 'ERROR_STUCK';
  type: 'CARD' | 'P2P' | 'MOBILE';
  errorMessage?: string;
  createdAt: string;
}

export interface IPartner {
  id: string;
  name: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'MAINTENANCE';
  activeGateways: string[];
}

export interface IRmqMessage {
  queue: string;
  messageCount: number;
  status: 'IDLE' | 'HEAVY_LOAD' | 'CRITICAL_STUCK';
}
