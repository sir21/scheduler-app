import { Pressable, StyleSheet, View } from "react-native";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
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
        >
          <DisplayDateTime
            value={
              mode === "date" ? value.toDateString() : value.toTimeString()
            }
            label={label}
          />
        </Pressable>
      </View>
      {/** Modal will come here */}
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
    opacity: 0.5,
  },
});

export default InputDateTime;
