import { useEffect, useRef, useState } from "react";
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";
import { Snackbar, Text } from "react-native-paper";
import { BackHandler, StyleSheet, View } from "react-native";
import {
  Barcode,
  BarcodeFormat,
  scanBarcodes,
} from "vision-camera-code-scanner";
import { runOnJS } from "react-native-reanimated";

const QrScanner = ({ onBackPress, onUrlClicked }: QrScannerProps) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const [hasPermission, setHasPermission] = useState(false);
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);
  const [hideCamera, setHideCamera] = useState(false);

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    const detectedBarcodes: Barcode[] = scanBarcodes(
      frame,
      [BarcodeFormat.QR_CODE],
      { checkInverted: true }
    );
    runOnJS(setBarcodes)(detectedBarcodes);
  }, []);

  useEffect(() => {
    if (hideCamera) {
      onBackPress();
    }
  }, [hideCamera]);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "authorized");
    })();
  }, []);

  useEffect(() => {
    const backAction = () => {
      setHideCamera(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (device == null) {
    return (
      <View style={styles.cameraErrorMessage}>
        <Text>Camera not available</Text>
      </View>
    );
  }

  return (
    <>
      {device != null && hasPermission && (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            ref={camera}
            onError={(err) => {
              console.log(err);
            }}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={10}
          />
          {barcodes.length === 0 && (
            <View style={styles.barcodeTextContainer}>
              <Text style={styles.barcodeTextURL}>Scan barcode</Text>
            </View>
          )}
          {barcodes.length > 0 && (
            <Snackbar
              visible={barcodes.length > 0}
              onDismiss={() => {}}
              action={{
                label: `Open link: ${barcodes[0].displayValue}`,
                onPress: () => {
                  onUrlClicked(barcodes[0].displayValue);
                },
              }}
            >
              <Text>Found it</Text>
            </Snackbar>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  barcodeTextContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  cameraErrorMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

type QrScannerProps = {
  onBackPress: () => void;
  onUrlClicked: (url?: string) => void;
};

export default QrScanner;
