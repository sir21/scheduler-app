import { StyleSheet, View } from "react-native";
import InputDate from "../../molecules/inputDate/InputDate";

const FilterSection = ({date, timeslot, onDateChange, onTimeChange}: FilterSectionProps) => {
  return (
    <View style={styles.inputContainer}>
      <InputDate
        label="Date"
        value={date}
      />
      <InputDate
        label="Timeslot"
        value={timeslot}
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
