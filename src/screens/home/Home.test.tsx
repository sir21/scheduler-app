/**
 * @format
 */

import "react-native";
import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import Home from "./Home";
import { Provider } from "react-native-paper";
import { getAvailability } from "../../util/requests/requests";
import { Alert } from "react-native";

jest.mock("../../components/organisms/qrScanner/QrScanner");
jest.mock("../../util/requests/requests");

describe("input timeslot tests", () => {
  it("should renders correctly", () => {
    const home = render(
      <Provider>
        <Home />
      </Provider>
    );
    expect(home).toBeDefined();
    expect(home.getByTestId("home-view")).toBeDefined();
  });

  it("should open camera when camera icon pressed", async () => {
    const { getByTestId } = render(
      <Provider>
        <Home />
      </Provider>
    );

    const cameraIcon = getByTestId("app-bar-camera-action");
    expect(cameraIcon).toBeDefined();
    await act(async () => {
      fireEvent.press(cameraIcon);
    });
  });

  it("should call api and empty data", async () => {
    (getAvailability as jest.Mock).mockReturnValue({ data: [] });
    const { getByText } = render(
      <Provider>
        <Home />
      </Provider>
    );

    waitFor(() => {
      expect(getByText("Room list unavailable")).toBeDefined();
    });
  });

  it("should call api and data available", async () => {
    (getAvailability as jest.Mock).mockRejectedValue({ code: "Error" });
    jest.spyOn(Alert, "alert");
    const container = render(
      <Provider>
        <Home />
      </Provider>
    );

    waitFor(() => {
      expect(Alert.alert).toHaveBeenCalled();
    });
  });
});
