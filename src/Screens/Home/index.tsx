import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";

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
import { useStocksStore } from "../../stores/useStocks";

export const Home = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const stocks = useStocksStore((state) => state.stocks);
  const fetchStocks = useStocksStore((state) => state.fetchStocks);
  const loading = useStocksStore((state) => state.isLoading);

  const updateStocksGroup = () => {
    fetchStocks();
    setIsRefreshing(false);
  };

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
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={updateStocksGroup}
                tintColor={"white"}
                colors={["white"]}
              />
            }
          />
        )}
      </StockGroupContent>
    </Container>
  );
};
