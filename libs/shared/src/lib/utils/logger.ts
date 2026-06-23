import { Subject, Observable } from 'rxjs';
import {shortStringify} from "./json-utils";

export type ILogCall = (...args: any[]) => void;

export interface ILogger {
  debug: ILogCall;
  error: ILogCall;
  info: ILogCall;
  log: ILogCall;
  warn: ILogCall;
  verbose: ILogCall;
}

const debugLevels: Record<string, number> = {
  verbose: 5, log: 4, info: 3, debug: 2, warn: 1, error: 0
};

const debugLevelsStyle: Record<string, string> = {
  verbose: 'color: #999',
  log: 'color: #333',
  info: 'color: #666',
  debug: 'color: teal; font-weight: 700',
  warn: 'color: orange',
  error: 'color: #FF3330; font-weight: 700' // Исправлена опечатка в цвете из исходника
};

const levelToConsoleMethod: Record<string, string> = {
  verbose: 'info', log: 'log', info: 'info', debug: 'log', warn: 'warn', error: 'error'
};

// Генератор уникального Hex-цвета на основе контекста
const getColorByWordPRand = (word: string): string => {
  let color = '#';
  const max = 6;
  const getXX = (index: number) => {
    const p: number[] = [];
    let count = 0;
    while (count < max) {
      if (index >= word.length) index = 0;
      p.push(word.charCodeAt(index));
      count++;
      index++;
    }
    let a = (p[2] * p[1] + p[1]) % 16;
    if (a < 8) a += 8;
    const b = (p[3] * p[4] + p[5]) % 16;
    return a.toString(16) + b.toString(16);
  };
  color += getXX(0) + getXX(max) + getXX(max * 2);
  return color;
};


const loggingStream = new Subject<string>();
export const logging$: Observable<string> = loggingStream.asObservable();



export const createLogger = (context: string, currentLogLevel: string = 'verbose'): ILogger => {
  const op = (level: string) => (...args: any[]) => {
    let [originalMessage, ...tail] = args;
    const timestamp = new Date().toISOString().replace('T', ' ').replace('Z', '');
    const formattedMessage = `${timestamp} %c[${context}]%c ${originalMessage}`;
    const method = levelToConsoleMethod[level];

    if (method && typeof (console as any)[method] === 'function') {
      (console as any)[method](formattedMessage, `background: ${getColorByWordPRand(context)}; color: #000; padding: 1px 4px; border-radius: 3px;`, debugLevelsStyle[level], ...tail);
    }

    if (tail.length) {
      tail = [tail.reduce((item: string, currentValue: any) => {
        if (typeof currentValue === 'object' && currentValue !== null) {
          return item + (item ? ' | ' : ' ') + shortStringify(currentValue);
        } else if (currentValue !== undefined && currentValue !== null) {
          return item + (item ? ' | ' : ' ') + currentValue.toString();
        }
        return item;
      }, '')];
    }

    loggingStream.next(`${timestamp} ${method.toUpperCase()} [${context}] ${originalMessage} ${tail.join('')}`);
  };


  const getOpOrNoop = (level: string) =>
    (debugLevels[currentLogLevel] >= debugLevels[level]) ? op(level) : () => {};

  return {
    debug: getOpOrNoop('debug'),
    error: getOpOrNoop('error'),
    info: getOpOrNoop('info'),
    log: getOpOrNoop('log'),
    warn: getOpOrNoop('warn'),
    verbose: getOpOrNoop('verbose')
  };
};
