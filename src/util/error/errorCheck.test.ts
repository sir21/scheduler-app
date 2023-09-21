/**
 * @format
 */

// Note: import explicitly to use the types shiped with jest.
import { describe, it } from "@jest/globals";

// Note: test renderer must be required after react-native.
import { errorCheck } from "./ErrorCheck";
import { AxiosError, isAxiosError } from "axios";

jest.mock("axios");

describe("input timeslot tests", () => {
  it("should return network error if error message is related to network error", () => {
    (isAxiosError as unknown as jest.Mock).mockReturnValue(true);
    const err = {
      code: "ERR_NETWORK",
      name: "error",
    } as AxiosError;

    const result = errorCheck(err);
    expect(result.title).toEqual("Network Error");
    expect(result.description).toEqual(
      "Please check your device internet connectivity"
    );
  });

  it("should return bad request if error is bad request", () => {
    (isAxiosError as unknown as jest.Mock).mockReturnValue(true);
    const err = {
      code: "ERR_BAD_REQUEST",
      name: "error",
    } as AxiosError;

    const result = errorCheck(err);
    expect(result.title).toEqual("Bad Request");
    expect(result.description).toEqual("Please, try again later");
  });

  it("should return error if error is different axios error", () => {
    (isAxiosError as unknown as jest.Mock).mockReturnValue(true);
    const err = {
      code: "NOT_FOUND",
      name: "error",
    } as AxiosError;

    const result = errorCheck(err);
    expect(result.title).toEqual("Error!");
    expect(result.description).toEqual("Please, try again later");
  });

  it("should return general error message if error is not axios error", () => {
    (isAxiosError as unknown as jest.Mock).mockReturnValue(false);
    const err = {
      code: "NOT_FOUND",
      name: "error",
    };

    const result = errorCheck(err);
    expect(result.title).toEqual("Error occur while fetching data!");
    expect(result.description).toEqual("Please, try again later");
  });
});
