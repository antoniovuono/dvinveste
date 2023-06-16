import { Entypo, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useTheme } from "styled-components";

import { Home } from "../../screens/Home";
import { SearchStocks } from "../../screens/SearchStocks";
const { Navigator, Screen } = createBottomTabNavigator();

export const BottomNavigation = () => {
  const { colors, fonts } = useTheme();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: colors.SECONDARY_TITLE,
        tabBarInactiveTintColor: colors.PRIMARY_TITLE,
        tabBarStyle: {
          backgroundColor: colors.SECONDARY_BACKGROUND,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.PRIMARY_MEDIUM,
          fontSize: 17,
          paddingLeft: 5,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={22} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={SearchStocks}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={22} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
