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
import Home from "./screens/home/Home";
import { Provider } from "react-native-paper";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <Provider>
      <StatusBar barStyle={"light-content"} />
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
