import { useState } from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";

const Alert = ({ buttonText, description, title, showAlert }: AlertProps) => {
  const [visible, setVisible] = useState(showAlert);

  const hideDialog = () => {
    setVisible(false);
  };
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{description}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>{buttonText}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

type AlertProps = {
  showAlert: boolean;
  title: string;
  description?: string;
  buttonText: string;
};

export default Alert;
