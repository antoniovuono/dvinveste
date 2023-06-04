import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import {
  BottomRefreshContent,
  Container,
  ListHeader,
  Loader,
  Refreshing,
  StockGroupContent,
  SubTitle,
  Title,
} from "./styles";
import { Divider } from "../../components/Divider";
import { Stocks } from "../../components/Stocks";
import { useStore } from "../../hooks/useStocks";
import { getRequest } from "../../services/networkRequests";
import { useStocksStore } from "../../stores/useStocksStore";

export const Home = () => {
  const { loadMoreItems, stocks, loading } = useStore();

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
            ListFooterComponent={
              <BottomRefreshContent>
                {!!stocks && <Refreshing />}
              </BottomRefreshContent>
            }
            onEndReachedThreshold={0}
            onEndReached={loadMoreItems}
          />
        )}
      </StockGroupContent>
    </Container>
  );
};
