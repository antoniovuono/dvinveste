import React from "react";
import { FlatList } from "react-native";

import {
  Container,
  Header,
  SearchContent,
  StocksGroup,
  SubTitle,
  Title,
} from "./styles";
import { Divider } from "../../components/Divider";
import { Input } from "../../components/Input";
import { SearchButton } from "../../components/SearchButton";
import { Stocks } from "../../components/Stocks";
import { useStock } from "../../hooks/useStocks";
import { useStocksStore } from "../../stores/useStocksStore";

export const SearchStocks = () => {
  const { stockId, setStocksId, handleSearchStocks } = useStock();

  const searchedStocks = useStocksStore((state) => state.searchedStocks);

  return (
    <>
      <Container>
        <Header>
          <Title>Pesquisar</Title>
          <SubTitle>Entre com o código da ação para pesquisar</SubTitle>

          <SearchContent>
            <Input
              placeholder="Entre com o código da ação"
              autoCapitalize="characters"
              value={stockId}
              onChangeText={setStocksId}
            />

            <SearchButton
              activeOpacity={0.6}
              onPress={() => handleSearchStocks(stockId)}
            />
          </SearchContent>

          <Divider />
        </Header>

        <StocksGroup>
          <FlatList
            data={searchedStocks}
            keyExtractor={(item) => item.name}
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
        </StocksGroup>
      </Container>
    </>
  );
};
