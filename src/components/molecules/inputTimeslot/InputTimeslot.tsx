import { Pressable, StyleSheet, View } from "react-native";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
import { useState } from "react";
import { Timeslot } from "../../../util/common";
import { Timeslots } from "../../../util/constants/timeslots";

const InputTimeslot = ({ label, value }: InputDateTimeProps) => {
  /**
   * CONSTANTS
   */
  const [timeslot, setTimeslot] = useState<Timeslot>("08:00");
  const [visible, setVisible] = useState<boolean>(false);
  const items = Timeslots.map((item) => {
    return { label: item, value: item };
  });

  /**
   * HELPER FUNCTIONS
   */
  const toggleTimeslotPicker = (status: boolean) => {
    setVisible(status);
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
          onPress={() => toggleTimeslotPicker(true)}
        >
          <DisplayDateTime value={timeslot} label={label} />
        </Pressable>
      </View>
    </>
  );
};

type InputDateTimeProps = {
  value: Timeslot;
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

export default InputTimeslot;
