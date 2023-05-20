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
import { IStocks } from "./interfaces";

export const Stocks = ({
  stock_image,
  stock_name,
  stock_code,
  stock_price,
  stock_variant,
}: IStocks) => {
  const { colors } = useTheme();

  return (
    <Container>
      <ImageAndDescriptionContent>
        <StockImage
          source={{
            uri: stock_image,
          }}
        />

        <StockTitleContent>
          <StockTitle>{stock_name}</StockTitle>
          <StockTitle isMedium>{stock_code}</StockTitle>
        </StockTitleContent>
      </ImageAndDescriptionContent>

      <PriceVariationContainer>
        <Price>R$ {stock_price}</Price>
        <VariationContent>
          <AntDesign name="caretup" size={14} color={colors.SUCCESS} />
          <Variation>{stock_variant}</Variation>
        </VariationContent>
      </PriceVariationContainer>
    </Container>
  );
};
