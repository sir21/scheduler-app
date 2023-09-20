import { StyleSheet, View } from "react-native";
import FilterSection from "../../components/organisms/filterSection/FilterSection";
import { useEffect, useRef, useState } from "react";
import AppBar from "../../components/atoms/appBar/AppBar";
import Colors from "../../util/constants/colors";
import RoomList from "../../components/organisms/roomList/RoomList";
import { getAvailability } from "../../util/requests/requests";
import { RoomAvailability } from "../../util/common";
import QrScanner from "../../components/organisms/qrScanner/QrScanner";
import { WebView, WebViewNavigation } from "react-native-webview";
import { Text } from "react-native-paper";
import DefaultButton from "../../components/atoms/defaultButton/DefaultButton";

const Home = () => {
  /**
   * CONSTANTS, STATES
   */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeslot, setSelectedTimeslot] = useState<string>("08:00 AM");
  const [showCamera, setShowCamera] = useState(false);
  const [showCameraIcon, setShowCameraIcon] = useState(true);
  const [showBackIcon, setShowBackIcon] = useState(false);
  const [showWebView, setShowWebView] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState<string | null>(null);
  const [availabilities, setAvailabilities] = useState<RoomAvailability[]>([]);
  const webView = useRef(null);

  /**
   * HELPER FUNCTIONS
   */
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (timeslot: string) => {
    setSelectedTimeslot(timeslot);
  };

  const handleCameraClick = () => {
    setShowCamera(true);
  };

  const getAvailableData = async () => {
    const data = await getAvailability();
    setAvailabilities(data);
  };

  const handleCameraBackPress = () => {
    setShowCamera(false);
  };

  const handleUrlSelect = (url?: string) => {
    if (!url) return; // TODO: Add alert
    setShowCamera(false);
    setShowWebView(true);
    setWebViewUrl(url);
  };

  useEffect(() => {
    getAvailableData();
  }, []);

  /**
   * RENDER FUNCTIONS
   */
  const renderCamera = () => {
    return (
      <View style={styles.outerContainer}>
        <QrScanner
          onBackPress={handleCameraBackPress}
          onUrlClicked={handleUrlSelect}
        />
      </View>
    );
  };

  const renderAppBar = () => {
    return (
      <AppBar
        title="Book a Room"
        onCameraButtonPress={handleCameraClick}
        showCamera={showCameraIcon}
        showBackButton={showBackIcon}
      />
    );
  };

  const renderRoomList = () => {
    return (
      <View style={styles.innerContainer}>
        {/* Filter section */}
        <FilterSection
          date={selectedDate}
          timeslot={selectedTimeslot}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
        {/*  Room availability*/}
        <RoomList
          availabilities={availabilities}
          selectedDate={selectedDate}
          selectedTimeslot={selectedTimeslot}
        />
      </View>
    );
  };

  const handleFallback = (event: WebViewNavigation) => {
    if (event.url.includes("intent")) {
      const urls = event.url
        .split(";")
        .find((u) => u.includes("S.browser_fallback_url"));
      if (!urls) return;
      const url = urls.split("=")[1];
      setWebViewUrl(url);
    }
  };

  const handleBackToHome = () => {
    setWebViewUrl(null);
  };

  const renderWebView = () => {
    return (
      <>
        {webViewUrl ? (
          <View style={{flex: 1, backgroundColor: Colors.background}}>
            <WebView
              source={{ uri: webViewUrl, method: "GET" }}
              originWhitelist={["intent://*"]}
              allowUniversalAccessFromFileURLs={true}
              onNavigationStateChange={handleFallback}
              ref={webView}
              onError={(err) => {
                err.preventDefault();
              }}
              style={{ flex: 1 }}
            />
            <DefaultButton
              type="primary"
              label="Back to Home"
              onPress={handleBackToHome}
              buttonStyles={{marginBottom: 20}}
            />
          </View>
        ) : (
          <></>
        )}
      </>
    );
  };

  const renderHomeView = () => {
    return (
      <View style={styles.outerContainer}>
        {renderAppBar()}
        {webViewUrl && renderWebView()}
        {!webViewUrl && renderRoomList()}
      </View>
    );
  };

  return <>{showCamera ? renderCamera() : renderHomeView()}</>;
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.background,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    width: "100%",
  },
});

export default Home;
