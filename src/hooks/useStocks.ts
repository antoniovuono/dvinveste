import { useEffect, useState } from "react";

import { getRequest } from "../services/networkRequests";
import { useStocksStore } from "../stores/useStocksStore";

export const useStock = () => {
  const storeStocks = useStocksStore((state) => state.storeStokes);
  const stocks = useStocksStore((state) => state.stocks);
  const loading = useStocksStore((stetae) => stetae.isLoading);
  const setSearchStockes = useStocksStore((state) => state.setSearchStockes);

  const [sotckId, setStocksId] = useState("");

  const handleSearchStocks = (stockId: string) => {
    const findStock = stocks.filter((stock) => stock.stock === sotckId);

    setSearchStockes(findStock);
  };

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await getRequest(`/api/quote/list`);

      storeStocks(response?.data?.stocks);
    };

    fetchStocks();
  }, []);

  return {
    stocks,
    loading,
    setStocksId,
    sotckId,
    handleSearchStocks,
  };
};
