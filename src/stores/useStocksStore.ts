import { create } from "zustand";

import { IStocksRequest } from "../services/interface";
import { getRequest } from "../services/networkRequests";

export interface IState {
  stocks: IStocksRequest[];
  fetchStocks: (items_limit: number) => void;
  isLoading: boolean;
}

const useStocksStore = create<IState>((set) => ({
  stocks: [],

  isLoading: true,

  fetchStocks: async (items_limit: number) => {
    const stocksResponse = await getRequest(
      `/api/quote/list?limit=${items_limit}`
    );

    set({ stocks: await stocksResponse?.data?.stocks });

    set({ isLoading: false });
  },
}));

export { useStocksStore };
