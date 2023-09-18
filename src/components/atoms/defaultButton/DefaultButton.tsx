import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";
import Colors from "../../../util/constants/colors";

const DefaultButton = ({
  type,
  label,
  buttonStyles,
  onPress,
}: DefaultButtonProps) => {
  return (
    <View
      style={[
        styles.commonButtonStyles,
        buttonStyles,
        type === "primary" ? styles.primaryColors : styles.secondaryColors,
      ]}
    >
      <Pressable onPress={onPress}>
        <Text variant="labelLarge" style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryColors: {
    backgroundColor: Colors.primary,
  },
  secondaryColors: {
    backgroundColor: Colors.secondary,
  },
  commonButtonStyles: {
    marginHorizontal: 8,
    height: 40,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: Colors.lightColor,
  }
});

type DefaultButtonProps = {
  type: "primary" | "secondary";
  label: string;
  buttonStyles: ViewStyle;
  onPress: () => void;
};

export default DefaultButton;
