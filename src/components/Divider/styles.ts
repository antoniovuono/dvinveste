import styled from 'styled-components/native';

export const Container = styled.View`
   width: 100%;
   height: 1px;
   background-color: ${({theme}) => theme.colors.BORDERS}; 
   margin: 20px 0;
`;