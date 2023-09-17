/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Home from "./src/screens/home/Home";
import { MD3LightTheme, Provider } from "react-native-paper";
import Colors from "./src/constants/colors";

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

export type AppTheme = typeof theme;

function App(): JSX.Element {
  return (
    <Provider theme={theme}>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
