import { Pressable, StyleSheet, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
import ModalDisplay from "../modalDisplay/ModalDisplay";
import { useState } from "react";

const InputDateTime = (props) => {
  /**
   * CONSTANTS
   */
  const [value, setValue] = useState<Date>(props.value);
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * HELPER FUNCTIONS
   */
  const handleOnPress = () => {
    setVisible(true);
  };

  const handleOnChange = (e: DateTimePickerEvent, date?: Date) => {
    console.log(e.type, date);
    setVisible(false);
    setValue(date);
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
          onPress={handleOnPress}
          android_ripple={{ color: "#ccc" }}
        >
          <DisplayDateTime
            value={
              props.mode === "date"
                ? value.toDateString()
                : value.toTimeString()
            }
            label={props.label}
          />
        </Pressable>
      </View>
      <ModalDisplay visible={visible}>
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={props.mode}
          onChange={handleOnChange}
        />
      </ModalDisplay>
    </>
  );
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
    opacity: 0.75,
  },
});

export default InputDateTime;
