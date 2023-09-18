import { StyleSheet, View } from "react-native";
import FilterSection from "../../components/organisms/filterSection/FilterSection";
import { useState } from "react";
import AppBar from "../../components/atoms/appBar/AppBar";
import Colors from "../../constants/Colors";
import RoomList from "../../components/organisms/roomList/RoomList";
import QrScanner from "../../components/organisms/qrScanner/QrScanner";

const Home = () => {
  /**
   * CONSTANTS, STATES
   */
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeslot, setSelectedTimeslot] = useState(new Date());
  const [showCamera, setShowCamera] = useState(false);

  /**
   * HELPER FUNCTIONS
   */
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (date: Date) => {
    setSelectedTimeslot(date);
  };

  const handleCameraClick = () => {
    console.log("show camera");
    setShowCamera(true);
  };

  /**
   * RENDER FUNCTIONS
   */
  return (
    <>
      {showCamera ? (
        <View style={styles.outerContainer}>
          {/* <QrScanner showCamera={showCamera} /> */}
        </View>
      ) : (
        <View style={styles.outerContainer}>
          <AppBar title="Book a Room" onCameraButtonClick={handleCameraClick} />
          <View style={styles.innerContainer}>
            {/* Filter section */}
            <FilterSection
              date={selectedDate}
              timeslot={selectedTimeslot}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
            />
            {/*  Room availability*/}
            <RoomList />
          </View>
        </View>
      )}
    </>
  );
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
