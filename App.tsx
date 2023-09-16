import { StatusBar, StyleSheet, View } from "react-native";
import { PaperProvider, MD3LightTheme, useTheme } from "react-native-paper";
import FilterSection from "./src/components/organisms/filterSection/FilterSection";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: "#ccc",
    surfaceVariant: "#fff",
    primary: "#333",
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar/>
      <View style={styles.container}>
        <FilterSection />
        <View style={styles.listContainer}></View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  listContainer: {
    flex: 1,
  },
});
