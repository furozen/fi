export interface BrandsConfigInterface {
  name: string;
  logo: string;

  layoutType: 'sidebar' | 'minimal';
  supportedLanguages: string[]; // Ограниченный массив доступных локалей
  enabledFeatures: {            // Флаги Tree Shaking для условного роутинга
    payments: boolean;
    partnersManagement: boolean;
    advancedAudit: boolean;     // Доступно строго в ЛК Developer
  };
}
