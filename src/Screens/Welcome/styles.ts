import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const LogoContent = styled.Text``;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
  text-align: center;
`;
