import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const SortButton = ({ onPress }: SortButtonProps) => {
  /**
   * RENDER FUNCTIONS
   */
  return (
    <View style={styles.sortContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressableStyles, styles.pressStyle]
            : styles.pressableStyles
        }
        onPress={onPress}
      >
        <Text variant="labelMedium" style={styles.text}>
          Sort
        </Text>
        <Icon name="sort" size={20} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sortContainer: {
    flex: 1,
  },
  pressableStyles: {
    flexDirection: "row",
    alignItems: "center",
  },
  pressStyle: {
    opacity: 0.5,
  },
  text: {
    paddingRight: 5,
  },
});

type SortButtonProps = {
  onPress: () => void;
};

export default SortButton;