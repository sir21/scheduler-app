import { StyleSheet, View } from "react-native";
import InputText from "../../atoms/inputText/InputText";
import { useState } from "react";

const FilterSection = () => {
  const [date, setDate] = useState("");
  const [TimeSlot, setTimeSlot] = useState("");

  const handleOnChangeDate = (change: string) => {
    console.log(change);
    setDate(change);
  };

  const handleOnChangeTime = (change: string) => {
    console.log(change);
    setTimeSlot(change);
  };

  const handleDateInputPress = () => {
    console.log("press");
  };

  const handleTimeSlotInputPress = () => {
    console.log("press");
  };

  return (
    <View style={styles.inputContainer}>
      <InputText
        value={date}
        label="Date"
        onChangeText={handleOnChangeDate}
        onPressIn={handleDateInputPress}
      />
      <InputText
        label="Timeslot"
        value={TimeSlot}
        onChangeText={handleOnChangeTime}
        onPressIn={handleTimeSlotInputPress}
      />
    </View>
  );
};

export default FilterSection;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
});
