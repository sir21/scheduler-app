import axios from "axios";
import { url } from "../constants/url";

export const getAvailability = async (): Promise<any> => {
  return await axios.get(url);
};
