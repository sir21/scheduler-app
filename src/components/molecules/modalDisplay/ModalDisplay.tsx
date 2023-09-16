import { Modal } from "react-native-paper";

const ModalDisplay = (props) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <Modal visible={props.visible} contentContainerStyle={containerStyle}>
      {props.children}
    </Modal>
  );
};

export default ModalDisplay;
