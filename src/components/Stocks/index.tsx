import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { SvgUri } from "react-native-svg";
import { useTheme } from "styled-components";

import { IStocks } from "./interfaces";
import {
  Container,
  ImageAndDescriptionContent,
  Price,
  PriceVariationContainer,
  StockTitle,
  StockTitleContent,
  Variation,
  VariationContent,
} from "./styles";

export const Stocks = ({
  stock_image,
  stock_name,
  stock_code,
  stock_price,
  stock_variation,
}: IStocks) => {
  const { colors } = useTheme();

  return (
    <Container>
      <ImageAndDescriptionContent>
        <SvgUri width={48} height={48} uri={stock_image} />

        <StockTitleContent>
          <StockTitle>{stock_name}</StockTitle>
          <StockTitle isMedium>{stock_code}</StockTitle>
        </StockTitleContent>
      </ImageAndDescriptionContent>

      <PriceVariationContainer>
        <Price>R$ {stock_price.toFixed(2)}</Price>
        <VariationContent>
          {Number(stock_variation) >= 0 ? (
            <AntDesign name="caretup" size={14} color={colors.SUCCESS} />
          ) : (
            <AntDesign name="caretdown" size={14} color={colors.WARNING} />
          )}

          <Variation variation={Number(stock_variation)}>
            {stock_variation}%
          </Variation>
        </VariationContent>
      </PriceVariationContainer>
    </Container>
  );
};
