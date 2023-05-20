import { getStatusBarHeight } from 'react-native-status-bar-height';
import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.PRIMARY_BACKGROUND};
`;

export const ListHeader = styled.View`
   width: 100%;
   margin-top: ${getStatusBarHeight() + 20}px;
   padding: 0 20px;
`;

export const Title = styled.Text<{isYellow?: boolean}>`
   font-size: 18px;
    ${({theme, isYellow}) => css`
      color: ${isYellow ? theme.colors.SECONDARY_TITLE : theme.colors.PRIMARY_TITLE};
      font-family: ${theme.fonts.PRIMARY_BOLD};
   `};
`;

export const SubTitle = styled.Text`
   font-size: 15px;
   margin-top: 8px;
    ${({theme}) => css`
      color: ${theme.colors.PRIMARY_TITLE};
      font-family: ${theme.fonts.PRIMARY_REGULAR};

   `};
`;