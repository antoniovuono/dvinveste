import { create } from "zustand";

import { IStocksRequest } from "../services/interface";

export interface IState {
  stocks: IStocksRequest[];
  storeStokes: (stocksData: IStocksRequest[]) => void;
  isLoading: boolean;
}

const useStocksStore = create<IState>((set) => ({
  stocks: [],

  isLoading: true,

  storeStokes: async (stocksData: IStocksRequest[]) => {
    set({ stocks: stocksData });

    set({ isLoading: false });
  },
}));

export { useStocksStore };
