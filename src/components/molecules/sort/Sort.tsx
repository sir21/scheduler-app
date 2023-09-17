import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import RadioButton from "../../atoms/radioButton/RadioButton";
import { useState } from "react";

const Sort = ({
  location,
  capacity,
  availability,
  onChange,
  onReset,
}: SortProps) => {
  /**
   * HELPER FUNCTIONS
   */
  const handleRadioButtonPress = (type: string) => {
    console.log(type);
  }

  /**
   * RENDER FUNCTIONS
   */
  return (
    <View style={styles.container}>
      <View>
        <Text variant="titleMedium">Sort</Text>
      </View>
      <View>
        <RadioButton
          value="location"
          status={location ? "checked" : "unchecked"}
          onPress={handleRadioButtonPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type SortProps = {
  location: boolean;
  capacity: boolean;
  availability: boolean;
  onChange?: (type: string) => void;
  onReset?: () => void;
};

export default Sort;
