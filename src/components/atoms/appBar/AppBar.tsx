import { StyleSheet } from "react-native";
import { Appbar, Text } from "react-native-paper";

const AppBar = ({
  title,
  onBackButtonClick,
  onCameraButtonClick,
}: AppBarProps) => {
  return (
    <Appbar.Header safeAreaInsets={{ top: 0 }} statusBarHeight={0}>
      {onBackButtonClick && <Appbar.BackAction onPress={onBackButtonClick} />}

      <Appbar.Content title={<Text variant="titleMedium">{title}</Text>} />
      {onCameraButtonClick && (
        <Appbar.Action icon="camera" onPress={() => {}} />
      )}
    </Appbar.Header>
  );
};

type AppBarProps = {
  title: string;
  onBackButtonClick?: () => void;
  onCameraButtonClick?: () => void;
};

const styles = StyleSheet.create({});

export default AppBar;
