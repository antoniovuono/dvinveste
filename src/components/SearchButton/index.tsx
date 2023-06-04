import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

export const SearchButton = ({ ...rest }: TouchableOpacityProps) => {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <Feather name="search" size={24} color={colors.PRIMARY_TITLE} />
    </Container>
  );
};
