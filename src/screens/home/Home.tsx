import { StyleSheet, View } from "react-native";
import FilterSection from "../../components/organisms/filterSection/FilterSection";
import { useState } from "react";
import AppBar from "../../components/atoms/appBar/AppBar";

const Home = () => {
  /**
   * CONSTANTS, STATES
   */
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeslot, setSelectedTimeslot] = useState(new Date());

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
    console.log('camera click');
  }

  /**
   * RENDER FUNCTIONS
   */
  return (
    <>
      <AppBar title="Book a Room" onCameraButtonClick={handleCameraClick} />
      <View style={styles.container}>
        {/* Filter section */}
        <FilterSection
          date={selectedDate}
          timeslot={selectedTimeslot}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
        {/*  Room availability*/}
        {/* <View style={styles.listContainer}></View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 1,
  },
});

export default Home;
