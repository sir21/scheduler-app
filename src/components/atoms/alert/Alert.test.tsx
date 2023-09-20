/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import Alert from "./Alert";
import { Provider } from "react-native-paper";

describe("alert tests", () => {
  it("should renders correctly", () => {
    const alert = render(
      <Provider>
        <Alert
          title="Test title"
          description="Test description"
          showAlert={true}
          buttonText="Cancel"
          hideAlert={jest.fn()}
        />
      </Provider>
    );

    expect(alert).toBeDefined();
    expect(alert.getByTestId("alert-dialog")).toBeDefined();
    expect(alert.getAllByRole("button").length).toBeGreaterThanOrEqual(1);
  });

  it("should hide alert if button pressed", async () => {
    const spyHideAlert = jest.fn();
    const { getByTestId } = render(
      <Provider>
        <Alert
          title="Test title"
          description="Test description"
          showAlert={true}
          buttonText="Cancel"
          hideAlert={spyHideAlert}
        />
      </Provider>
    );
    const button = getByTestId("alert-button");
    expect(button).toBeDefined();
    await act(async () => {
        fireEvent.press(button);
    })
    expect(spyHideAlert).toHaveBeenCalled();
  });
});
