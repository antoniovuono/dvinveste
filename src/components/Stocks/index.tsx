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
import { useTheme } from "styled-components";
import { IStocks } from "./interfaces";
import { Circle, Ellipse, SvgUri } from "react-native-svg";
import { View } from "react-native";

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
        <SvgUri width={48} height={48} uri={stock_image} scaleX={30} />

        <StockTitleContent>
          <StockTitle>{stock_name}</StockTitle>
          <StockTitle isMedium>{stock_code}</StockTitle>
        </StockTitleContent>
      </ImageAndDescriptionContent>

      <PriceVariationContainer>
        <Price>R$ {stock_price}</Price>
        <VariationContent>
          <AntDesign name="caretup" size={14} color={colors.SUCCESS} />
          <Variation>{stock_variation}</Variation>
        </VariationContent>
      </PriceVariationContainer>
    </Container>
  );
};
