import { AvailabilityWithTime } from "./availabilityWithTime";

export interface RoomAvailability {
  availability: [AvailabilityWithTime];
  capacity: string;
  level: string;
  name: string;
}
