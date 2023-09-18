import { StyleSheet, View } from "react-native";
import InputDate from "../../molecules/inputDate/InputDate";
import { Timeslot } from "../../../util/common";
import InputTimeslot from "../../molecules/inputTimeslot/InputTimeslot";

const FilterSection = ({
  date,
  timeslot,
  onDateChange,
  onTimeChange,
}: FilterSectionProps) => {
  return (
    <View style={styles.inputContainer}>
      <InputDate label="Date" value={date} />
      <InputTimeslot label="Timeslot" value={timeslot} />
    </View>
  );
};

type FilterSectionProps = {
  date: Date;
  timeslot: Timeslot;
  onDateChange: (date: Date) => void;
  onTimeChange: (date: Timeslot) => void;
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
});

export default FilterSection;
