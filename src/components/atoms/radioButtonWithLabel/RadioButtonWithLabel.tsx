import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import Colors from "../../../util/constants/Colors";

const RadioButtonWithLabel = ({
  label,
  value,
  checked,
  onPress,
}: RRadioButtonWithLabelProps) => {
  /**
   * HELPER FUNCTIONS
   */
  const handleRadioButtonPress = (e: GestureResponderEvent) => {
    onPress(value ? value : label.trim().toLowerCase());
  };

  /**
   * RENDER FUNCTIONS
   */
  return (
    <View style={styles.radioContainer} accessibilityRole={"radio"}>
      <View>
        <Text variant="bodyLarge">{label}</Text>
      </View>
      <View>
        <Pressable onPress={handleRadioButtonPress}>
          {checked ? (
            <Icon
              name="radio-button-checked"
              testID="radio-button-with-label-checked"
              size={26}
              color={Colors.secondary}
            />
          ) : (
            <Icon
              name="radio-button-unchecked"
              testID="radio-button-with-label-not-checked"
              size={26}
              color={Colors.secondary}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

type RRadioButtonWithLabelProps = {
  label: string;
  value?: string;
  checked: boolean;
  onPress: (value: string) => void;
};

export default RadioButtonWithLabel;
