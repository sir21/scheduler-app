/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import AppBar from "./AppBar";
import { Provider } from "react-native-paper";

describe("app bar tests", () => {
  it("should renders correctly", () => {
    const { getByText } = render(
      <Provider>
        <AppBar title="Testing title" />
      </Provider>
    );
    expect(getByText("Testing title")).toBeDefined();
  });

  it("should render back icon", async () => {
    const spyOnBackButtonPress = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <AppBar
          title="Testing title"
          showBackButton
          onBackButtonPress={spyOnBackButtonPress}
        />
      </Provider>
    );
    const backIcon = getByTestId("app-bar-back-action");
    expect(backIcon).toBeDefined();
    await act(async () => {
      fireEvent.press(backIcon);
    });
    expect(spyOnBackButtonPress).toHaveBeenCalled();
  });
});
