import axios, { AxiosError } from 'axios';
import config from '@config';

import type {
  GetAllCoinsResponse,
  GetCoinChartResponse,
  GetCoinDetailsResponse,
  GetAllCoinsArguments,
} from './types';
import type { ApiServiceResponse } from '@utils/helpers';

class ApiService {
  constructor(
    public api = axios.create({
      baseURL: config.apiBaseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }),
  ) {}

  async getAllCoins(params: GetAllCoinsArguments): Promise<ApiServiceResponse<GetAllCoinsResponse>> {
    try {
      const response = await this.api.get<GetAllCoinsResponse>('/tickers/', {
        params,
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return { success: false, error: error as AxiosError };
    }
  }

  async getCoinDetails(id: string): Promise<ApiServiceResponse<GetCoinDetailsResponse>> {
    try {
      const response = await this.api.get<GetCoinDetailsResponse>('/ticker/', {
        params: {
          id: id,
        },
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return { success: false, error: error as AxiosError };
    }
  }

  async getCoinChart(id: string, timeframe: string): Promise<ApiServiceResponse<GetCoinChartResponse>> {
    try {
      const response = await axios.get<GetCoinChartResponse>(
        `${config.chartBaseUrl}/?coin=${id}&time=${timeframe}`,
      );
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error as AxiosError };
    }
  }
}

export default new ApiService();
