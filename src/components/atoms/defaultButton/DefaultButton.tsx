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
        <View style={styles.innerContainer}>
          <Text variant="labelLarge" style={styles.buttonText}>
            {label}
          </Text>
        </View>
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
    height: 50,
    borderRadius: 16,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttonText: {
    color: Colors.lightColor,
  },
});

type DefaultButtonProps = {
  type: "primary" | "secondary";
  label: string;
  buttonStyles: ViewStyle;
  onPress: () => void;
};

export default DefaultButton;
