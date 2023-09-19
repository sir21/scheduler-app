module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-paper/babel",
    [
      "react-native-reanimated/plugin",
      {
        globals: ["__scanCodes"],
      },
    ],
  ],
};
