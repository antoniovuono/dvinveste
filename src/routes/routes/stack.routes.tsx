import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { BottomNavigation } from "./bottom.routes";
import { Welcome } from "../../screens/Welcome";

const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="BottomNavigator" component={BottomNavigation} />
    </Navigator>
  );
};
