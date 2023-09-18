import { StyleSheet, View } from "react-native";
import FilterSection from "../../components/organisms/filterSection/FilterSection";
import { useEffect, useState } from "react";
import AppBar from "../../components/atoms/appBar/AppBar";
import Colors from "../../util/constants/colors";
import RoomList from "../../components/organisms/roomList/RoomList";
import { getAvailability } from "../../util/requests/requests";
import { RoomAvailability } from "../../util/common";

const Home = () => {
  /**
   * CONSTANTS, STATES
   */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeslot, setSelectedTimeslot] = useState<string>("08:00 AM");
  const [showCamera, setShowCamera] = useState(false);
  const [availabilities, setAvailabilities] = useState<RoomAvailability[]>([]);

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

  useEffect(() => {
    getAvailableData();
  }, []);

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
            <RoomList
              availabilities={availabilities}
              selectedDate={selectedDate}
              selectedTimeslot={selectedTimeslot}
            />
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
