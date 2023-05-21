import { create } from "zustand";
import { IStocksRequest } from "../services/interface";
import { getRequest } from "../services/networkRequests";

export interface IState {
    stocks: IStocksRequest[],
    fetchStocks: () => void;
    isLoading: boolean;
};

const useStocksStore = create<IState>(set => ({
    stocks: [],

    isLoading: true,

    fetchStocks: async () => {

        const stocksResponse = await getRequest("/api/quote/list");

        set({ stocks: await stocksResponse?.data?.stocks});

        set({ isLoading: false});
    },

   
}));

export { useStocksStore
};