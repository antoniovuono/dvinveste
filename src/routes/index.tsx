import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { BottomNavigation } from "./bottom.routes";

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};
