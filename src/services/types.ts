import { CoinDetails, CoinsData } from '../store/types';

export interface CoinsInfo {
  coins_num: number;
  time: number;
}

export interface GetAllCoinsResponse {
  data: CoinsData[];
  info: CoinsInfo;
}

export type ChartKeysResponse = keyof GetCoinChartResponse;

export interface GetCoinDetailsResponse extends Array<CoinDetails> {}

export type GetAllCoinsArguments = Record<'limit' | 'start', number>;

export type CoinChartData = Array<[number, number]>;

export type GetCoinChartResponse = Record<
  'price' | 'price_btc' | 'mcap' | 'volume',
  CoinChartData
>;
