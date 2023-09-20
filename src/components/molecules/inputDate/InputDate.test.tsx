/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import InputDate from "./InputDate";
import { Provider } from "react-native-paper";

describe("input date tests", () => {
  it("should renders correctly", () => {
    const { getByText, getByTestId } = render(
      <Provider>
        <InputDate
          value={new Date()}
          label="Date Test"
          onDateChange={jest.fn()}
        />
      </Provider>
    );
  });

  it("should render sort button pressable", async () => {
    const spyOnDatechange = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <InputDate
          value={new Date()}
          label="Date Test"
          onDateChange={jest.fn()}
        />
      </Provider>
    );
    // const button = getByTestId("sort-button-press");
    // expect(button).toBeDefined();
    // await act(async () => {
    //   fireEvent.press(button);
    // });
    // expect(spyOnDatechange).toHaveBeenCalled();
  });
});
