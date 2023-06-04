import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 42px;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.SUCCESS};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
