/**
 * @format
 */

import "react-native";
import React from "react";
import { fireEvent, render, act } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import RoomList from "./RoomList";
import { Provider } from "react-native-paper";
import { RoomAvailability } from "../../../util/common";

describe("room list tests", () => {
  it("should renders correctly", () => {
    const availabilities: RoomAvailability[] = [];
    const date = new Date(2023, 8, 18);
    const container = render(
      <Provider>
        <RoomList
          availabilities={availabilities}
          selectedDate={date}
          selectedTimeslot="08:00 AM"
        />
      </Provider>
    );
    expect(container).toBeDefined();
  });

  it("should renders availabilities with room list", () => {
    const availabilities: RoomAvailability[] = [
      {
        level: "8",
        capacity: "4",
        name: "Testing name",
        availability: { "08:00 AM": "0", "08:30 AM": "0" },
      },
    ];
    const date = new Date(2023, 8, 18);
    const { getByText, getAllByTestId } = render(
      <Provider>
        <RoomList
          availabilities={availabilities}
          selectedDate={date}
          selectedTimeslot="08:00 AM"
        />
      </Provider>
    );
    expect(getByText("Level 8")).toBeDefined();
    expect(getByText("4 Pax")).toBeDefined();
    expect(getByText("Testing name")).toBeDefined();
    expect(getByText("Not Available")).toBeDefined();
    expect(getAllByTestId('room-card-item').length).toEqual(1);
  });
});
