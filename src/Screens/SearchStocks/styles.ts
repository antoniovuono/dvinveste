import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND};
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
`;
