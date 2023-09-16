import { PaperProvider, MD3LightTheme, useTheme } from "react-native-paper";
import Home from "./src/screens/home/Home";

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
      <Home />
    </PaperProvider>
  );
}
