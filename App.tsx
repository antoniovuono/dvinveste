import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components";

import { MainRoutes } from "./src/routes";
import theme from "./src/theme/theme";

const App = () => {
  const [isFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <MainRoutes />
      </View>
    </ThemeProvider>
  );
};

export default App;
