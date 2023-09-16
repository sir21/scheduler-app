import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const InputText = (props) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        label={props.label}
        value={props.value}
        onChangeText={props.onChangeText}
        onPressIn={props.onPressIn}
        style={styles.input}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 16,
  },
  input: {
    paddingHorizontal: 0,
  },
});
