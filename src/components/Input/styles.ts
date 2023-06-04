import { TextInput } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.PRIMARY_TITLE || null,
}))`
  width: 77%;
  height: 42px;
  border-radius: 8px;
  padding-left: 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.SECONDARY_BACKGROUND};
    color: ${theme.colors.PRIMARY_TITLE};
    font-family: ${theme.fonts.PRIMARY_REGULAR};
    border: 1px solid ${theme.colors.BORDERS};
  `}
`;
