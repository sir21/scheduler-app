import { Pressable } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import DisplayDateTime from "../../atoms/displayDateTime/DisplayDateTime";
import ModalDisplay from "../modalDisplay/ModalDisplay";
import { useState } from "react";

const InputDateTime = (props) => {
  /**
   * CONSTANTS
   */
  const [value, setValue] = useState<Date>(props.value);
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * HELPER FUNCTIONS
   */
  const handleOnPress = () => {
    setVisible(true);
  };

  const handleOnChange = (e: DateTimePickerEvent, date?: Date) => {
    console.log('change', date);
    setVisible(false);
    setValue(date);
  };

  /**
   * RENDER FUNCTIONS
   */
  return (
    <>
      <Pressable onPress={handleOnPress}>
        <DisplayDateTime
          value={
            props.mode === "date" ? value.toDateString() : value.toTimeString()
          }
          label={props.label}
        />
      </Pressable>
      <ModalDisplay visible={visible}>
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={props.mode}
          is24Hour={true}
          onChange={handleOnChange}
          collapsable={false}
        />
      </ModalDisplay>
    </>
  );
};

export default InputDateTime;
