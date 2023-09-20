/**
 * @format
 */

import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import InputTimeslot from "./InputTimeslot";
import { Provider } from "react-native-paper";

describe("input timeslot tests", () => {
  it("should renders correctly", () => {
    const { getByText, getByTestId, getAllByTestId } = render(
      <Provider>
        <InputTimeslot
          value="08:00 AM"
          label="Timeslot"
          onTimeslotChange={jest.fn()}
        />
      </Provider>
    );
    expect(getByText("Timeslot")).toBeDefined();
    expect(getByText("08:00 AM")).toBeDefined();
  });
});
