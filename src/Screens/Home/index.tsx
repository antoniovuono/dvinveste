import React from "react";
import { FlatList } from "react-native";

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
import { useStock } from "../../hooks/useStocks";

export const Home = () => {
  const { stocks, loading } = useStock();

  return (
    <Container>
      <ListHeader>
        <Title>
          Cotações | <Title isGreen>IBOVESPA</Title>
        </Title>

        <SubTitle>Cotações do dia na bolsa de valores.</SubTitle>
      </ListHeader>

      <Divider />

      <StockGroupContent>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
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
