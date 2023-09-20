/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import SortButton from "./SortButton";
import { Provider } from "react-native-paper";

describe("sor button tests", () => {
  it("should renders correctly", () => {
    const { getByText, getByTestId } = render(
      <Provider>
        <SortButton onPress={jest.fn} />
      </Provider>
    );
    expect(getByText("Sort")).toBeDefined();
    expect(getByTestId("sort-button-sort-icon")).toBeDefined();
  });

  it("should render sort button pressable", async () => {
    const spyOnPress = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <SortButton onPress={spyOnPress} />
      </Provider>
    );
    const button = getByTestId("sort-button-press");
    expect(button).toBeDefined();
    await act(async () => {
      fireEvent.press(button);
    });
    expect(spyOnPress).toHaveBeenCalled();
  });
});
