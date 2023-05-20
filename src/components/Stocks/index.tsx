import React from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  ImageAndDescriptionContent,
  Price,
  PriceVariationContainer,
  StockImage,
  StockTitle,
  StockTitleContent,
  Variation,
  VariationContent,
} from "./styles";
import { View } from "react-native";
import { useTheme } from "styled-components";

export const Stocks = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <ImageAndDescriptionContent>
        <StockImage
          source={{
            uri: "https://play-lh.googleusercontent.com/ReQEaxm44OuduIlJEVO_-xs9iZXSyRNdzGKrONYoLSgAdOzyhPKTb1xuuoPXK6tABm0",
          }}
        />

        <StockTitleContent>
          <StockTitle>BRADESCO PN</StockTitle>
          <StockTitle isMedium>BBDC4</StockTitle>
        </StockTitleContent>
      </ImageAndDescriptionContent>

      <PriceVariationContainer>
        <Price>R$ 16,00</Price>
        <VariationContent>
          <AntDesign name="caretup" size={14} color={colors.SUCCESS} />
          <Variation> 2,42</Variation>
        </VariationContent>
      </PriceVariationContainer>
    </Container>
  );
};
