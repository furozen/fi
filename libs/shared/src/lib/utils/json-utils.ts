import stringify from 'fast-json-stable-stringify';

export const shortStringify = (json: any, max = 1024): string => {
  // Параметр cycles:true защищает компилятор от падения при циклических ссылках
  const s = (stringify as any)(json, { cycles: true }) as string;
  return s.length > max ? s.slice(0, max) + '////' : s;
};
