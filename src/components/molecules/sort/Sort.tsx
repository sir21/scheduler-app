import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import RadioButtonWithLabel from "../../atoms/radioButtonWithLabel/RadioButtonWithLabel";
import { SortOptionsType } from "../../../util/common";
import DefaultButton from "../../atoms/defaultButton/DefaultButton";

const Sort = ({ sorts, onApply, onReset }: SortProps) => {
  /**
   * CONSTANTS
   */
  const [checked, setChecked] = useState<SortOptionsType>(sorts);

  /**
   * HELPER FUNCTIONS
   */
  const handleRadioButtonPress = (type: string) => {
    if (type === "location") {
      setChecked((current) => ({ ...current, location: !current.location }));
    } else if (type === "capacity") {
      setChecked((current) => ({ ...current, capacity: !current.capacity }));
    } else {
      setChecked((current) => ({
        ...current,
        availability: !current.availability,
      }));
    }
  };

  const handleApplyPress = () => {
    if (onApply) {
      onApply(checked);
    }
  };

  const handleResetPress = () => {
    if (onReset) {
      onReset();
    }
  };

  /**
   * RENDER FUNCTIONS
   */
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleContainer} variant="titleMedium">
          Sort
        </Text>
      </View>
      <View>
        <View style={styles.radioButtonContainer}>
          <RadioButtonWithLabel
            label="Location"
            checked={checked.location}
            onPress={handleRadioButtonPress}
          />
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButtonWithLabel
            label="Capacity"
            checked={checked.capacity}
            onPress={handleRadioButtonPress}
          />
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButtonWithLabel
            label="Availability"
            checked={checked.availability}
            onPress={handleRadioButtonPress}
          />
        </View>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.actionButtons}>
          <DefaultButton
            label="Reset"
            onPress={handleResetPress}
            type="secondary"
            buttonStyles={styles.resetButton}
          />
          <DefaultButton
            label="Apply"
            onPress={handleApplyPress}
            type="primary"
            buttonStyles={styles.applyButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingBottom: 16 ,
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: 8,
  },
  actionContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  radioButtonContainer: {
    marginVertical: 12,
  },
  actionButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  resetButton: {
    flex: 1,
  },
  applyButton: {
    flex: 2,
  },
});

type SortProps = {
  sorts: SortOptionsType;
  onApply?: (sorts: SortOptionsType) => void;
  onReset?: () => void;
};

export default Sort;
