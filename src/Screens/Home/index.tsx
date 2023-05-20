import React from "react";

import { Container, ListHeader, SubTitle, Title } from "./styles";
import { Divider } from "../../components/Divider";
import { Stocks } from "../../components/Stocks";

export const Home = () => {
  return (
    <Container>
      <ListHeader>
        <Title>
          Cotações | <Title isYellow>IBOVESPA</Title>
        </Title>

        <SubTitle>Cotações do dia na bolsa de valores.</SubTitle>
      </ListHeader>

      <Divider />

      <Stocks
        stock_image="https://play-lh.googleusercontent.com/ReQEaxm44OuduIlJEVO_-xs9iZXSyRNdzGKrONYoLSgAdOzyhPKTb1xuuoPXK6tABm0"
        stock_name="BRADESCO PN"
        stock_code="BBDC4"
        stock_price={16.14}
        stock_variation={2.42}
      />
    </Container>
  );
};
