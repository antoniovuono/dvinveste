import React, { useEffect, useState } from "react";

import {
  Container,
  ListHeader,
  Loader,
  StockGroupContent,
  SubTitle,
  Title,
} from "./styles";
import { Divider } from "../../components/Divider";
import { Stocks } from "../../components/Stocks";
import { getRequest } from "../../services/networkRequests";
import { useStocksStore } from "../../stores/useStocks";
import { IStocksRequest } from "../../services/interface";
import { FlatList } from "react-native";

export const Home = () => {
  const stocks = useStocksStore((state) => state.stocks);
  const fetchStocks = useStocksStore((state) => state.fetchStocks);
  const loading = useStocksStore((state) => state.isLoading);

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <Container>
      <ListHeader>
        <Title>
          Cotações | <Title isYellow>IBOVESPA</Title>
        </Title>

        <SubTitle>Cotações do dia na bolsa de valores.</SubTitle>
      </ListHeader>

      <Divider />

      <StockGroupContent>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            data={stocks}
            keyExtractor={(item) => item.stock}
            renderItem={({ item }) => (
              <Stocks
                stock_image={item.logo}
                stock_name={item.name}
                stock_code={item.stock}
                stock_price={item.close}
                stock_variation={item.change.toFixed(2)}
              />
            )}
          />
        )}
      </StockGroupContent>
    </Container>
  );
};
