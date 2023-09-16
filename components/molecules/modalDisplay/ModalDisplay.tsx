import { Modal, Portal } from "react-native-paper";

const ModalDisplay = (props) => {
  const containerStyle = {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 100,
    flex: 1,
  };
  return (
    <Portal>
      <Modal visible={props.visible} contentContainerStyle={containerStyle}>
        {props.children}
      </Modal>
    </Portal>
  );
};

export default ModalDisplay;
