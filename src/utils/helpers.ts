import type { AxiosError } from 'axios';

export type ApiServiceResponse<T> = {
  success: boolean;
  data?: T;
  error?: AxiosError;
};

// get image url from coin id
export const getCoinImgUrl = (nameid: string, small?: boolean) =>
  `https://www.coinlore.com/img/${small ? '25x25/' : ''}${nameid}.png`;

export const getPriceChangeColor = (change: string) => {
  const numChange = parseFloat(change);
  return numChange >= 0 ? 'text-green-500' : 'text-red-500';
};

export { default as formatter } from './formatter';
