import axios from "axios";
import { url } from "../constants/url";
import { RoomAvailability } from "../common";

export const getAvailability = async (): Promise<RoomAvailability[]> => {
  return (await axios.get(url)).data;
};
