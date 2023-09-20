import { StyleSheet, View } from "react-native";
import FilterSection from "../../components/organisms/filterSection/FilterSection";
import { useEffect, useRef, useState } from "react";
import AppBar from "../../components/atoms/appBar/AppBar";
import Colors from "../../util/constants/colors";
import RoomList from "../../components/organisms/roomList/RoomList";
import { getAvailability } from "../../util/requests/requests";
import { RoomAvailability } from "../../util/common";
import QrScanner from "../../components/organisms/qrScanner/QrScanner";
import BookingSuccess from "../../components/organisms/bookingSuccess/BookingSuccess";
import Alert from "../../components/atoms/alert/Alert";

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
    const data = await getAvailability();
    setAvailabilities(data);
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
        showAlert={true}
        description="Scan the QR code again"
        buttonText="Cancel"
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
        onBackButtonPress={handleCameraBackPress}
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

  const handleBackToHome = () => {
    setWebViewUrl(null);
  };

  const renderWebView = () => {
    return (
      <>
        {webViewUrl ? (
          <BookingSuccess
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
