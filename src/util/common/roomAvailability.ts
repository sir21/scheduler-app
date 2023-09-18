export interface RoomAvailability {
  availability: { [key: string]: "0" | "1" };
  capacity: string;
  level: string;
  name: string;
}
