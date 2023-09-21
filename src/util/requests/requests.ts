import axios from "axios";
import { url } from "../constants/Url";

export const getAvailability = async (): Promise<any> => {
  return await axios.get(url);
};
