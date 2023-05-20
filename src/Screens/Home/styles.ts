import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;

   background-color: ${({theme}) => theme.colors.PRIMARY_BACKGROUND};
`;

export const Title = styled.Text`
   color: ${({theme}) => theme.colors.PRIMARY_TITLE};
`;