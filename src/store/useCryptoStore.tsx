import { create } from 'zustand';
import { CryptoStorage } from './types';
import ApiService from '@services/Api.service';
import type { GetAllCoinsArguments } from '@services/types';

const useCryptoStore = create<CryptoStorage>((set, get) => ({
    data: undefined,
    isLoading: false,
    isLoadingMore: false,
    errorMessage: undefined,
    filterText: '',
    setFilterText: (text: string) => {
        set({ filterText: text });
    },
    getCryptoList: async (args: GetAllCoinsArguments, loadMore = false) => {
        if (loadMore) {
            set({ isLoadingMore: true, errorMessage: undefined });
        } else {
            set({ isLoading: true, errorMessage: undefined });
        }

        const response = await ApiService.getAllCoins(args);

        if (response.success) {
            if (loadMore && get().data && response.data) {
                // Append new data to existing data
                set({
                    data: {
                        ...response.data,
                        data: [...(get().data?.data || []), ...(response.data.data || [])],
                    },
                    isLoading: false,
                    isLoadingMore: false,
                });
            } else {
                // Initial load or refresh
                set({
                    data: response.data,
                    isLoading: false,
                    isLoadingMore: false,
                });
            }
        } else {
            set({
                errorMessage: response.error?.message,
                isLoading: false,
                isLoadingMore: false,
            });
        }
        return response;
    },
}));

export default useCryptoStore;
