import React from "react";

import { Container, ListHeader, SubTitle, Title } from "./styles";
import { Divider } from "../../components/Divider";

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
    </Container>
  );
};
