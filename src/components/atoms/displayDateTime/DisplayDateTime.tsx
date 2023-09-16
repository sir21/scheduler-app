import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const DisplayDateTime = (props) => {
  return (
    <View style={styles.inputView} pointerEvents="none">
      <TextInput
        label={props.label}
        value={props.value}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 16,
  },
  input: {
    paddingHorizontal: 0,
  },
});

export default DisplayDateTime;
