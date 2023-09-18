/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import { Linking, StatusBar, useColorScheme } from "react-native";
import Home from "./src/screens/home/Home";
import { MD3LightTheme, Provider } from "react-native-paper";
import Colors from "./src/constants/Colors";
// import { Camera } from "react-native-vision-camera";

function App(): JSX.Element {
  const colorScheme = useColorScheme();

  // useEffect(() => {
  //   async function getPermission() {
  //     const permission = await Camera.requestCameraPermission();
  //     console.log(`Camera permission status: ${permission}`);
  //     if (permission === "denied") await Linking.openSettings();
  //   }
  //   getPermission();
  // }, []);

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
