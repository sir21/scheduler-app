/**
 * @format
 */

import "react-native";
import React from "react";
import { render } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import DisplayDateTime from "./DisplayDateTime";
import { Provider } from "react-native-paper";

describe("display date time tests", () => {
  it("should renders correctly", () => {
    const displayDateTime = render(
      <Provider>
        <DisplayDateTime value="Display value" label="Display text" />
      </Provider>
    );
    expect(displayDateTime).toBeDefined();
  });
});
