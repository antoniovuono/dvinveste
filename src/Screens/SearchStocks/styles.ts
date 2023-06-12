import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 21px;
  margin-top: ${getStatusBarHeight() + 5}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-top: ${getStatusBarHeight() + 20}px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.PRIMARY_SEMIBOLD};
    color: ${theme.colors.SECONDARY_TITLE};
  `}
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-bottom: 26px;
  margin-top: 5px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.PRIMARY_REGULAR};
    color: ${theme.colors.PRIMARY_TITLE};
  `}
`;

export const SearchContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StocksGroup = styled.View`
  padding: 0 20px;
`;
