import React from "react";

import { Container, ListHeader, SubTitle, Title } from "./styles";

export const Home = () => {
  return (
    <Container>
      <ListHeader>
        <Title>
          Cotações | <Title isYellow>IBOVESPA</Title>
        </Title>

        <SubTitle>Cotações do dia na bolsa de valores.</SubTitle>
      </ListHeader>
    </Container>
  );
};
