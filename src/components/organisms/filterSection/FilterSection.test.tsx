/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import FilterSection from "./FilterSection";
import { Provider } from "react-native-paper";

describe("filter section tests", () => {
  it("should renders correctly", () => {
    const date = new Date(2023, 8, 18);
    const container = render(
      <Provider>
        <FilterSection
          date={date}
          timeslot="08:00 AM"
          onDateChange={jest.fn()}
          onTimeChange={jest.fn}
        />
      </Provider>
    );
    expect(container).toBeDefined();
  });
});
