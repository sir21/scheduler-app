import { PropsWithChildren } from "react";
import { Modal, Portal } from "react-native-paper";

const ModalDisplay = ({ children, visible }: ModalDisplayProps) => {
  const containerStyle = {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 100,
    flex: 1,
  };
  return (
    <Portal>
      <Modal visible={visible} contentContainerStyle={containerStyle}>
        {children}
      </Modal>
    </Portal>
  );
};

type ModalDisplayProps = PropsWithChildren<{
  visible: boolean;
}>;

export default ModalDisplay;
