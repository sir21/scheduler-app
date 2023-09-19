import { useEffect, useRef, useState } from "react";
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import {
  Barcode,
  BarcodeFormat,
  scanBarcodes,
  useScanBarcodes,
} from "vision-camera-code-scanner";
import { runOnJS } from "react-native-reanimated";

const QrScanner = ({ showCamera }: QrScannerProps) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const [hasPermission, setHasPermission] = useState(false);
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);

  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
  //   checkInverted: true,
  // });

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
    (async () => {
      const status = await Camera.requestCameraPermission();
      console.log(status);
      setHasPermission(status === "authorized");
    })();
  }, []);

  if (device == null) {
    return <Text>Camera not available</Text>;
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
            frameProcessorFps={5}
          />
          {barcodes.map((barcode, idx) => (
            <Text key={idx} style={styles.barcodeTextURL}>
              {barcode.displayValue}
            </Text>
          ))}
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
});

type QrScannerProps = {
  showCamera: boolean;
};

export default QrScanner;
