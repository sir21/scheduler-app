import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

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
    <View style={styles.radioContainer}>
      <View>
        <Text variant="bodyLarge">{label}</Text>
      </View>
      <View>
        <Pressable onPress={handleRadioButtonPress}>
          {checked ? (
            <Icon name="radio-button-checked" size={26} />
          ) : (
            <Icon name="radio-button-unchecked" size={26} />
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
