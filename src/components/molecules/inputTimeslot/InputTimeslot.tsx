import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import { Timeslots } from "../../../util/constants/timeslots";
import { Divider, Text } from "react-native-paper";

const InputTimeslot = ({
  label,
  value,
  onTimeslotChange,
}: InputDateTimeProps) => {
  /**
   * CONSTANTS
   */
  const [timeslot, setTimeslot] = useState<string>(value);

  const items = Timeslots.map((item) => {
    return { label: item, value: item };
  });

  /**
   * HELPER FUNCTIONS
   */
  const handleDropdownChange = (item: { label: string; value: string }) => {
    setTimeslot(item.value);
    onTimeslotChange(item.value);
  };

  /**
   * RENDER FUNCTIONS
   */
  const renderLabel = () => {
    if (label) {
      return <Text variant="bodySmall">{label}</Text>;
    }
    return null;
  };

  return (
    <View style={styles.displayContainer}>
      {renderLabel()}
      <Dropdown
        data={items}
        labelField={"label"}
        valueField={"value"}
        onChange={handleDropdownChange}
        value={timeslot}
      />
      <Divider bold />
    </View>
  );
};

type InputDateTimeProps = {
  value: string;
  label: string;
  onTimeslotChange: (value: string) => void;
};

const styles = StyleSheet.create({
  displayContainer: {
    paddingLeft: 4,
    marginBottom: 32,
  },
});

export default InputTimeslot;
