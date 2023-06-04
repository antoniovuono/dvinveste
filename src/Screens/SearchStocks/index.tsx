import React from "react";

import { Container, Header, SearchContent, SubTitle, Title } from "./styles";
import { Divider } from "../../components/Divider";
import { Input } from "../../components/Input";
import { SearchButton } from "../../components/SearchButton";

export const SearchStocks = () => {
  return (
    <Container>
      <Header>
        <Title>Pesquisar</Title>
        <SubTitle>Entre com o código da ação para pesquisar</SubTitle>

        <SearchContent>
          <Input
            placeholder="Entre com o código da ação"
            autoCapitalize="characters"
          />

          <SearchButton activeOpacity={0.6} />
        </SearchContent>

        <Divider />
      </Header>
    </Container>
  );
};
