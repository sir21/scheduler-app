import { StyleSheet, View } from "react-native";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
import { useState } from "react";
import InputDateTime from "../../molecules/inputDateTime/InputDateTime";

const FilterSection = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [timeSlot, setTimeSlot] = useState<Date>(new Date());

  const handleOnChangeDate = (change: Date) => {
    setDate(change);
  };

  const handleOnChangeTime = (change: Date) => {
    setTimeSlot(change);
  };

  return (
    <View style={styles.inputContainer}>
      <InputDateTime
        label="Date"
        value={date}
        mode={"date"}
      />
      <InputDateTime
        label="Timeslot"
        value={timeSlot}
        mode={"time"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
});

export default FilterSection;
