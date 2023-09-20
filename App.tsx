import 'react-native-reanimated';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";
import Home from "./src/screens/home/Home";
import { MD3LightTheme, Provider } from "react-native-paper";
import Colors from "./src/util/constants/colors";

function App(): JSX.Element {
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
      <SafeAreaView style={styles.safeAreaStyles}>
        <StatusBar barStyle={"default"} />
        <Home />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeAreaStyles: {
    flex: 1,
  },
});

export default App;
