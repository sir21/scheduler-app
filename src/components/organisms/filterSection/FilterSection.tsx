import { StyleSheet, View } from "react-native";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
import { useState } from "react";
import InputDateTime from "../../molecules/inputDateTime/InputDateTime";

const FilterSection = ({date, timeslot, onDateChange, onTimeChange}: FilterSectionProps) => {
  return (
    <View style={styles.inputContainer}>
      <InputDateTime
        label="Date"
        value={date}
        mode={"date"}
      />
      <InputDateTime
        label="Timeslot"
        value={timeslot}
        mode={"time"}
      />
    </View>
  );
};

type FilterSectionProps = {
  date: Date;
  timeslot: Date;
  onDateChange: (date: Date) => void;
  onTimeChange: (date: Date) => void;
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
});

export default FilterSection;
