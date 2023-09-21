import { useEffect, useState } from "react";
import { StyleSheet, View, Alert as ReactNativeAlert } from "react-native";

import FilterSection from "../../components/organisms/filterSection/FilterSection";
import AppBar from "../../components/atoms/appBar/AppBar";
import Colors from "../../util/constants/colors";
import RoomList from "../../components/organisms/roomList/RoomList";
import { getAvailability } from "../../util/requests/requests";
import { RoomAvailability } from "../../util/common";
import QrScanner from "../../components/organisms/qrScanner/QrScanner";
import BookingResultDisplay from "../../components/organisms/bookingResultDisplay/BookingResultDisplay";
import Alert from "../../components/atoms/alert/Alert";
import { errorCheck } from "../../util/error/errorCheck";

const Home = () => {
  /**
   * CONSTANTS, STATES
   */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeslot, setSelectedTimeslot] = useState<string>("08:00 AM");
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [showCameraIcon, setShowCameraIcon] = useState<boolean>(true);
  const [showBackIcon, setShowBackIcon] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState<string | null>(null);
  const [availabilities, setAvailabilities] = useState<RoomAvailability[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  /**
   * HELPER FUNCTIONS
   */

  /**
   * Handle date and time selection
   */

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (timeslot: string) => {
    setSelectedTimeslot(timeslot);
  };

  const getAvailableData = async () => {
    try {
      const response = await getAvailability();
      setAvailabilities(response.data);
    } catch (err) {
      const errorMessage = errorCheck(err);
      ReactNativeAlert.alert(errorMessage.title, errorMessage.description, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  /**
   * Handle camera controls
   */

  const handleCameraClick = () => {
    setShowCamera(true);
  };

  const handleCameraBackPress = () => {
    setShowCamera(false);
    setShowCameraIcon(true);
    setWebViewUrl(null);
    setShowBackIcon(false);
  };

  /**
   * Handle QR functions
   */

  const handleUrlSelect = (url?: string) => {
    if (!url) {
      <Alert
        title="URL not available!"
        showAlert={showAlert}
        description="Scan the QR code again"
        buttonText="Cancel"
        hideAlert={() => {
          setShowAlert(false);
        }}
      />;
      return;
    }
    setShowCamera(false);
    setShowBackIcon(true);
    setShowCameraIcon(false);
    setWebViewUrl(url);
  };

  /**
   * USE EFFECT FUNCTIONS
   */
  useEffect(() => {
    if (selectedDate && selectedTimeslot) {
      getAvailableData();
    }
  }, [selectedDate, selectedTimeslot]);

  /**
   * RENDER FUNCTIONS
   */
  const renderCamera = () => {
    return (
      <View style={styles.outerContainer} testID="qr-scanner">
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
        onBackButtonPress={handleCameraBackPress}
        showCamera={showCameraIcon}
        showBackButton={showBackIcon}
      />
    );
  };

  const renderRoomList = () => {
    return (
      <View style={styles.innerContainer} testID="room-list">
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

  const handleBackToHome = () => {
    setWebViewUrl(null);
    setShowCameraIcon(true)
    setShowBackIcon(false);
  };

  const renderWebView = () => {
    return (
      <>
        {webViewUrl ? (
          <BookingResultDisplay
            url={webViewUrl}
            onBackToHomePress={handleBackToHome}
            updateWebViewUrl={setWebViewUrl}
          />
        ) : (
          <></>
        )}
      </>
    );
  };

  const renderHomeView = () => {
    return (
      <View style={styles.outerContainer} testID="home-view">
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
