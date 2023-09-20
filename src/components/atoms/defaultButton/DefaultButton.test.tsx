/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import DefaultButton from "./DefaultButton";
import { Provider } from "react-native-paper";

describe("default button tests", () => {
  it("should renders correctly", () => {
    const { getByText } = render(
      <Provider>
        <DefaultButton
          type="primary"
          label="Test"
          buttonStyles={{}}
          onPress={jest.fn()}
        />
      </Provider>
    );
    expect(getByText("Test")).toBeDefined();
  });

  it("should render back icon", async () => {
    const spyOnPress = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <DefaultButton
          type="primary"
          label="Test"
          buttonStyles={{}}
          onPress={spyOnPress}
        />
      </Provider>
    );
    const button = getByTestId("default-button-press");
    expect(button).toBeDefined();
    await act(async () => {
      fireEvent.press(button);
    });
    expect(spyOnPress).toHaveBeenCalled();
  });
});
