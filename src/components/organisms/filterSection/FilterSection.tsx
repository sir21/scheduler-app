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
      <InputDate label="Date" value={date} onDateChange={onDateChange} />
      <InputTimeslot
        label="Timeslot"
        value={timeslot}
        onTimeslotChange={onTimeChange}
      />
    </View>
  );
};

type FilterSectionProps = {
  date: Date;
  timeslot: string;
  onDateChange: (date: Date) => void;
  onTimeChange: (date: string) => void;
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
});

export default FilterSection;
