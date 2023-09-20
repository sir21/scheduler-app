/**
 * @format
 */

import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import Home from "./Home";
import { Provider } from "react-native-paper";

describe("input timeslot tests", () => {
  it("should renders correctly", () => {
    const home = render(
      <Provider>
        <Home />
      </Provider>
    );
    expect(home).toBeDefined();
  });
});
