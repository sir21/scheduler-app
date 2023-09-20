import { useState } from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";

const Alert = ({ buttonText, description, title, showAlert, hideAlert }: AlertProps) => {
  const [visible, setVisible] = useState(showAlert);

  const hideDialog = () => {
    setVisible(false);
    hideAlert();
  };
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog} testID="alert-dialog">
        <Dialog.Title accessibilityLabel={title}>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium" accessibilityLabel={description}>
            {description}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={hideDialog}
            accessibilityRole={"button"}
            accessibilityLabel={buttonText}
            testID="alert-button"
          >
            {buttonText}
          </Button>
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
  hideAlert: () => void;
};

export default Alert;
