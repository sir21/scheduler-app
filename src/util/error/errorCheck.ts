import { isAxiosError } from "axios";
import { ErrorObject } from "../common";
import { ErrCodes } from "../constants/errorCodes";

export const errorCheck = (err: any): ErrorObject => {
  if (isAxiosError(err)) {
    if (ErrCodes.badRequest === err.code) {
      return {
        title: "Bad Request",
        description: "Please, try again later",
      };
    }
    if (ErrCodes.networkError === err.code) {
      return {
        title: "Network Error",
        description: "Please check your device internet connectivity",
      };
    }
    return {
      title: "Error!",
      description: "Please, try again later",
    };
  }
  return {
    title: "Error occur while fetching data!",
    description: "Please, try again later",
  };
};
