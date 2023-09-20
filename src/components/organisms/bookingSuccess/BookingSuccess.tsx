import { StyleSheet, View } from "react-native";
import WebView, { WebViewNavigation } from "react-native-webview";
import Colors from "../../../util/constants/colors";
import DefaultButton from "../../atoms/defaultButton/DefaultButton";

const BookingSuccess = ({
  url,
  onBackToHomePress,
  updateWebViewUrl,
}: BookingSuccessProps) => {
  /**
   * HELPER FUNCTIONS
   */
  const handleFallback = (event: WebViewNavigation) => {
    if (event.url.includes("intent")) {
      const urls = event.url
        .split(";")
        .find((u) => u.includes("S.browser_fallback_url"));
      if (!urls) return;
      const url = urls.split("=")[1];
      updateWebViewUrl(url);
    }
  };

  /**
   * RENDER FUNCTIONS
   */
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url, method: "GET" }}
        originWhitelist={["intent://*"]}
        allowUniversalAccessFromFileURLs={true}
        onNavigationStateChange={handleFallback}
        onError={(err) => {
          err.preventDefault();
        }}
        style={styles.webView}
      />
      <DefaultButton
        type="primary"
        label="Back to Home"
        onPress={onBackToHomePress}
        buttonStyles={styles.buttonStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  webView: {
    flex: 1,
  },
  buttonStyles: {
    marginBottom: 20,
  },
});

type BookingSuccessProps = {
  url: string;
  updateWebViewUrl: (url: string) => void;
  onBackToHomePress: () => void;
};

export default BookingSuccess;
