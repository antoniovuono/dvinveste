import { ActivityIndicator } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  padding: 20px;
`;

export const ListHeader = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 40}px;
`;

export const Title = styled.Text<{ isYellow?: boolean }>`
  font-size: ${RFValue(18)}px;
  ${({ theme, isYellow }) => css`
    color: ${isYellow
      ? theme.colors.SECONDARY_TITLE
      : theme.colors.PRIMARY_TITLE};
    font-family: ${theme.fonts.PRIMARY_BOLD};
  `};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.colors.PRIMARY_TITLE};
    font-family: ${theme.fonts.PRIMARY_REGULAR};
  `};
`;

export const StockGroupContent = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  margin-bottom: ${getBottomSpace()}px;
`;

export const Loader = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: "large",
  color: theme.colors.PRIMARY_TITLE,
}))``;

export const BottomRefreshContent = styled.View`
  padding: 10px;
`;

export const Refreshing = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: "small",
  color: theme.colors.PRIMARY_TITLE,
}))``;
