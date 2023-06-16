import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { StackRoutes } from "./routes/stack.routes";

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
