/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import RoomCard from "./RoomCard";
import { Provider } from "react-native-paper";

describe("room card tests", () => {
  it("should renders correctly", () => {
    const { getByText } = render(
      <Provider>
        <RoomCard name="Coffee" status="Available" level={7} capacity={6} />
      </Provider>
    );

    expect(getByText("Coffee")).toBeDefined();
    expect(getByText("Available")).toBeDefined();
    expect(getByText("Level 7")).toBeDefined();
    expect(getByText("6 Pax")).toBeDefined();
  });
});
