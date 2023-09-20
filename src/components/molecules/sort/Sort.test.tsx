/**
 * @format
 */

import "react-native";
import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import Sort from "./Sort";
import { Provider } from "react-native-paper";

describe("input timeslot tests", () => {
  it("should renders correctly", () => {
    const { getAllByTestId, getByText } = render(
      <Provider>
        <Sort
          sorts={{ location: true, capacity: false, availability: false }}
        />
      </Provider>
    );
    expect(getByText("Sort")).toBeDefined();
    expect(
      getAllByTestId("radio-button-with-label-not-checked").length
    ).toEqual(2);
    expect(getAllByTestId("radio-button-with-label-checked").length).toEqual(1);
  });

  it("should renders correctly if all checks are true", () => {
    const { getAllByTestId } = render(
      <Provider>
        <Sort sorts={{ location: true, capacity: true, availability: true }} />
      </Provider>
    );
    expect(getAllByTestId("radio-button-with-label-checked").length).toEqual(3);
  });

  it("should update status if radio buttons pressed", async () => {
    const { getAllByTestId } = render(
      <Provider>
        <Sort
          sorts={{ location: false, capacity: false, availability: false }}
        />
      </Provider>
    );
    const radios = getAllByTestId("radio-button-with-label-not-checked");
    expect(radios.length).toEqual(3);
    fireEvent.press(radios[0]);
    fireEvent.press(radios[1]);
    fireEvent.press(radios[2]);

    setTimeout(() => {
      expect(getAllByTestId("radio-button-with-label-checked").length).toEqual(
        3
      );
    }, 10);
  });

  it("should call respective props if buttons are clicked", async () => {
    const spyOnApply = jest.fn();
    const spyOnReset = jest.fn();
    const { getByText } = render(
      <Provider>
        <Sort
          sorts={{ location: false, capacity: false, availability: false }}
          onApply={spyOnApply}
          onReset={spyOnReset}
        />
      </Provider>
    );
    const resetButton = getByText("Reset");
    expect(resetButton).toBeDefined();
    const applyButton = getByText("Apply");
    expect(applyButton).toBeDefined();
    await act(async () => {
      fireEvent.press(resetButton);
    });
    expect(spyOnReset).toHaveBeenCalled();

    await act(async () => {
      fireEvent.press(applyButton);
    });
    expect(spyOnApply).toHaveBeenCalled();
  });
});
