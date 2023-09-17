import { View } from "react-native";

const RadioButton = ({ value, status, onPress }: RadioButtonProps) => {
  return (
    <View>
      <RadioButton value={value} status={status} onPress={onPress} />
    </View>
  );
};

type RadioButtonProps = {
  value: string;
  status: "checked" | "unchecked";
  onPress: (value: string) => void;
};

export default RadioButton;
