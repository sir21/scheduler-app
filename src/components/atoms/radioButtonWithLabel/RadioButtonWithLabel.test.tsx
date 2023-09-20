/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import RadioButtonWithLabel from "./RadioButtonWithLabel";
import { Provider } from "react-native-paper";

describe("radio button with label tests", () => {
  it("should renders correctly", () => {
    const radioButtonWithLabel = render(
      <Provider>
        <RadioButtonWithLabel
          label="Test label"
          checked={true}
          onPress={jest.fn}
        />
      </Provider>
    );
    expect(radioButtonWithLabel).toBeDefined();
    expect(
      radioButtonWithLabel.getByTestId("radio-button-with-label-checked")
    ).toBeDefined();
  });

  it("should render unchecked state", async () => {
    const spyOnPress = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <RadioButtonWithLabel
          label="Test label"
          checked={false}
          onPress={spyOnPress}
        />
      </Provider>
    );
    const button = getByTestId("radio-button-with-label-not-checked");
    expect(button).toBeDefined();
    await act(async () => {
      fireEvent.press(button);
    });
    expect(spyOnPress).toHaveBeenCalled();
  });
});
