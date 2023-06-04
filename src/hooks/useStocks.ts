import React, { useEffect, useState } from "react";

import { getRequest } from "../services/networkRequests";
import { useStocksStore } from "../stores/useStocksStore";

export const useStore = () => {
  const storeStocks = useStocksStore((state) => state.storeStokes);
  const stocks = useStocksStore((state) => state.stocks);
  const loading = useStocksStore((stetae) => stetae.isLoading);

  const [groupItemslimit, setGroupItemsLimit] = useState(7);

  const loadMoreItems = () => {
    setGroupItemsLimit(groupItemslimit + 7);
  };

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await getRequest(
        `/api/quote/list?limit=${groupItemslimit}`
      );

      storeStocks(response?.data?.stocks);
    };

    fetchStocks();
  }, []);

  return { loadMoreItems, stocks, loading };
};
