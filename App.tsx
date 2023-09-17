/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import Home from "./src/screens/home/Home";
import { MD3LightTheme, Provider } from "react-native-paper";
import Colors from "./src/constants/colors";

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: Colors.primary,
      secondary: Colors.secondary,
      tertiary: Colors.tertiary,
      error: Colors.error,
      background: Colors.background,
      surfaceVariant: Colors.surfaceVariant,
    },
  };

  return (
    <Provider theme={theme}>
      <StatusBar barStyle={"default"} />
      <Home />
    </Provider>
  );
}

export default App;
