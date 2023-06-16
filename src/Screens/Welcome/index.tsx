import React from "react";

import { Container, Description } from "./styles";
import Logotipo from "../../assets/icons/logotipo.svg";
import { Divider } from "../../components/Divider";

export const Welcome = () => {
  return (
    <Container>
      <Logotipo />
      <Divider />
      <Description>Invista no seu futuro, acompanhe o agora</Description>
    </Container>
  );
};
