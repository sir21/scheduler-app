/**
 * @format
 */

import "react-native";
import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import Home from "./Home";
import { Provider } from "react-native-paper";

jest.mock("../../components/organisms/qrScanner/QrScanner");

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
});
