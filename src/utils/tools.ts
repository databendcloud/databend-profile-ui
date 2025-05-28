import numeral from 'numeral';
import { format } from 'bytes';
import prettyMilliseconds from 'pretty-ms';
import thousands from 'thousands';
// @ts-ignore
import * as pako from 'pako';
import { message } from 'antd';

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
    message.error('Invalid JSON string，May be caused by multiple profiles');
    return false;
  }
}

// 压缩并编码函数
export function compressAndEncode(jsonString: string) {
  // 1. 使用 pako 压缩 JSON 字符串
  const compressed = pako.gzip(jsonString);
  // 2. 将压缩后的二进制数据转换为 Base64
  const base64Encoded = btoa(String.fromCharCode.apply(null, compressed));
  // 3. 替换为 URL 安全的字符（+ -> -, / -> _, 移除 =）
  const urlSafeBase64 = base64Encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return urlSafeBase64;
}

// 解码并解压函数
export function decodeAndDecompress(base64String: string) {
  // 1. 将 URL 安全的 Base64 还原为标准 Base64
  const standardBase64 = base64String?.replace(/-/g, '+')?.replace(/_/g, '/') ?? '';
  // 2. Base64 解码为二进制字符串
  const binaryString = atob(standardBase64);
  // 3. 转换为 Uint8Array
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  // 4. 使用 pako 解压
  const decompressed = pako.ungzip(bytes, { to: 'string' });
  return decompressed;
}
export function getQueryParam(name: string) {
  const match = window.location.search.match(new RegExp(`[?&]${name}=([^&]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}