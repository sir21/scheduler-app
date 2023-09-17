import { Pressable, StyleSheet, View } from "react-native";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
import ModalDisplay from "../modalDisplay/ModalDisplay";
import { useState } from "react";

const InputDateTime = ({ label, mode, value }: InputDateTimeProps) => {
  /**
   * CONSTANTS
   */
  const [date, setDate] = useState<Date>(value);
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * HELPER FUNCTIONS
   */
  const handleOnPress = () => {
    setVisible(true);
  };

  // const handleOnChange = (e: DateTimePickerEvent, date?: Date) => {
  //   console.log(e.type, date);
  //   setVisible(false);
  //   setValue(date);
  // };

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
              mode === "date" ? value.toDateString() : value.toTimeString()
            }
            label={label}
          />
        </Pressable>
      </View>
      <ModalDisplay visible={visible}>
        {/* <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={props.mode}
          onChange={handleOnChange}
        /> */}
      </ModalDisplay>
    </>
  );
};

type InputDateTimeProps = {
  value: Date;
  mode: "time" | "date";
  label: string;
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
