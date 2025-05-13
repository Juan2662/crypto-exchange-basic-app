import { GetAllCoinsArguments, GetAllCoinsResponse } from '@services/types';
import type { ApiServiceResponse } from '@utils/helpers';

export type CryptoActions = {
  getCryptoList: (_: GetAllCoinsArguments, loadMore?: boolean) => Promise<ApiServiceResponse<GetAllCoinsResponse>>;
  setFilterText: (text: string) => void;
}

export type CryptoState = {
  data: GetAllCoinsResponse | undefined;
  isLoading: boolean;
  isLoadingMore: boolean;
  errorMessage: string | undefined;
  filterText: string;
}

export type CryptoStorage = CryptoState & CryptoActions;

export interface CoinsData {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  market_cap_usd: string;
  volume24: string;
  volume24_native: string;
  csupply: string;
  price_btc: string;
  tsupply: string;
  msupply: string;
}
