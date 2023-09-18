import "react-native-worklets/src";
import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
// import { Camera, useCameraDevices } from "react-native-vision-camera";
// import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";

const QrScanner = ({ showCamera }: QrScannerProps) => {
  // const camera = useRef(null);
  // const devices = useCameraDevices();
  // const device = devices.back;
  // const [hasPermission, setHasPermission] = useState(false);

  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
  //   checkInverted: true,
  // });

  // useEffect(() => {
  //   (async () => {
  //     const status = await Camera.requestCameraPermission();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  // if (device == null) {
  //   return <Text>Camera not available</Text>;
  // }

  // return (
  //   <>
  //     <Camera
  //       ref={camera}
  //       style={StyleSheet.absoluteFill}
  //       device={device}
  //       isActive={showCamera}
  //       photo={true}
  //     />
  //     {barcodes.map((barcode, idx) => (
  //       <Text key={idx}>{barcode.displayValue}</Text>
  //     ))}
  //   </>
  // );
};

type QrScannerProps = {
  showCamera: boolean;
};

export default QrScanner;
