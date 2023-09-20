import { Appbar, Text } from "react-native-paper";

const AppBar = ({
  title,
  showBackButton,
  showCamera,
  onBackButtonPress,
  onCameraButtonPress,
}: AppBarProps) => {
    /**
   * RENDER FUNCTIONS
   */
  return (
    <Appbar.Header safeAreaInsets={{ top: 0 }} statusBarHeight={0}>
      {showBackButton && <Appbar.BackAction onPress={onBackButtonPress} />}

      <Appbar.Content title={<Text variant="titleMedium">{title}</Text>}/>
      {showCamera && (
        <Appbar.Action icon="camera" onPress={onCameraButtonPress} />
      )}
    </Appbar.Header>
  );
};

type AppBarProps = {
  title: string;
  onBackButtonPress?: () => void;
  onCameraButtonPress?: () => void;
  showCamera?: boolean;
  showBackButton?: boolean;
};

export default AppBar;
