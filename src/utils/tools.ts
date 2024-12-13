import numeral from 'numeral';
import { format } from 'bytes';
import prettyMilliseconds from 'pretty-ms';
import thousands from 'thousands';

export function formatRows(value: number) {
  if (value <= 999) return value;
  return numeral(value).format('0.0a')?.toUpperCase();
}

export function getTextWidth(text: string): number {
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.whiteSpace = 'nowrap';
  div.style.fontSize = '12px';
  div.style.visibility = 'hidden';
  div.textContent = text;
  document.body.appendChild(div);
  const width = div.offsetWidth;
  document.body.removeChild(div);
  return width;
}


export const filterSize = (size: number): string => {
  return format(size, { thousandsSeparator: ',' });
};

export const filterMillisecond = (duration: number | string) => {
  if (duration !== undefined) {
    return prettyMilliseconds(Number(duration) || 0);
  }
  return '0ms';
};

export const toThousands = (num: number): string => {
  return thousands(num || 0);
};
export const filterMinute = (second: number) => {
  if (second <= 60) {
    return second.toFixed(0) + 's';
  } else {
    const m = Math.floor(second / 60);
    const leftTime = second - (m * 60);
    return m + 'm' + (leftTime >= 1 ? leftTime.toFixed(0) + 's' : '');
  }
};

export function getPercent(up: number, down: number): string {
  return down <= 0 ? '0%' : ((up / down) * 100).toFixed(1) + '%';
}
export function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}
