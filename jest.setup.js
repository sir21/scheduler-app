import nock from "nock";

nock.disableNetConnect();

jest.mock("react-native-webview", () => ({
  default: () => jest.fn(),
}));

jest.mock("react-native-vision-camera", () => 'Camera');

jest.useFakeTimers();

