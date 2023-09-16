import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

const DisplayDateTime = ({ label, value }: DisplayDateTimeProps) => {
  return (
    <View style={styles.inputView} pointerEvents="none">
      <TextInput label={label} value={value} style={styles.input} />
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

type DisplayDateTimeProps = {
  value: string;
  label: string;
};

export default DisplayDateTime;
