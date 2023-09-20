import { Pressable, StyleSheet, View } from "react-native";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
import { useState } from "react";
import DatePicker from "react-native-date-picker";

const InputDate = ({ label, value, onDateChange }: InputDateProps) => {
  /**
   * CONSTANTS
   */
  const [date, setDate] = useState<Date>(value);
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * HELPER FUNCTIONS
   */
  const toggleDatePicker = (status: boolean) => {
    setVisible(status);
  };

  const handleOnConfirm = (newDate: Date) => {
    setDate(newDate);
    toggleDatePicker(false);
    onDateChange(newDate);
  };

  /**
   * RENDER FUNCTIONS
   */
  return (
    <>
      <View style={styles.displayContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.pressableContainer, styles.pressed]
              : styles.pressableContainer
          }
          onPress={() => toggleDatePicker(true)}
        >
          <DisplayDateTime value={date?.toDateString()} label={label} />
        </Pressable>
      </View>
      <DatePicker
        modal
        open={visible}
        date={date}
        onConfirm={handleOnConfirm}
        onCancel={() => toggleDatePicker(false)}
      />
    </>
  );
};

type InputDateProps = {
  value: Date;
  label: string;
  onDateChange: (date: Date) => void;
};

const styles = StyleSheet.create({
  displayContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  pressableContainer: {
    paddingVertical: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default InputDate;
