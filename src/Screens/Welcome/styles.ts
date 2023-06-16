import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  justify-content: center;
  align-items: center;
`;

export const LogoContent = styled.Text``;

export const Logotipo = styled.Text<{ initials?: boolean }>`
  font-size: ${RFValue(40)}px;

  ${({ theme, initials }) => css`
    font-family: ${theme.fonts.PRIMARY_BOLD};
    color: ${initials ? theme.colors.SUCCESS : theme.colors.PRIMARY_TITLE};
    letter-spacing: ${initials ? -10 : 0}px;
  `}
`;
