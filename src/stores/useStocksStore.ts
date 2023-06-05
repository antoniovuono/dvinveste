import { create } from "zustand";

import { IStocksRequest } from "../services/interface";

export interface IState {
  stocks: IStocksRequest[];
  searchedStocks: IStocksRequest[];
  storeStokes: (stocksData: IStocksRequest[]) => void;
  setSearchStockes: (stocksData: IStocksRequest[]) => void;
  isLoading: boolean;
}

const useStocksStore = create<IState>((set) => ({
  stocks: [],

  searchedStocks: [],

  isLoading: true,

  storeStokes: async (stocksData: IStocksRequest[]) => {
    set({ stocks: stocksData });
    set({ isLoading: false });
  },

  setSearchStockes: async (stocksData: IStocksRequest[]) => {
    set({ searchedStocks: stocksData });
    set({ isLoading: false });
  },
}));

export { useStocksStore };
