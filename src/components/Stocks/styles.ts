import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.BORDERS};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 13px;
  align-items: center;
  margin-bottom: 10px;
`;

export const ImageAndDescriptionContent = styled.View`
  flex-direction: row;
`;

export const StockImage = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
`;

export const StockTitleContent = styled.View`
  padding-left: 19px;
`;

export const StockTitle = styled.Text<{ isMedium?: boolean }>`
  font-size: 16px;
  ${({ theme, isMedium }) => css`
    color: ${theme.colors.PRIMARY_TITLE};
    font-family: ${isMedium
      ? theme.fonts.PRIMARY_MEDIUM
      : theme.fonts.PRIMARY_BOLD};
  `}
`;

export const PriceVariationContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 18px;
  ${({ theme }) => css`
    color: ${theme.colors.PRIMARY_TITLE};
    font-family: ${theme.fonts.PRIMARY_MEDIUM};
  `}
`;

export const VariationContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Variation = styled.Text<{ variation: number }>`
  font-size: 16px;
  padding-left: 5px;
  ${({ theme, variation }) => css`
    color: ${variation >= 0 ? theme.colors.SUCCESS : theme.colors.WARNING};
    font-family: ${theme.fonts.PRIMARY_BOLD};
  `}
`;
