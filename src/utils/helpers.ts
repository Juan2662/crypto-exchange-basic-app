import type { AxiosError } from 'axios';
import { Linking } from 'react-native';

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

export const openUrl = async (url: string) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error(`Don't know how to open URI: ${url}`);
    }
  } catch (error) {
    console.error('Error opening URL:', error);
  }
};

export { default as formatter } from './formatter';
