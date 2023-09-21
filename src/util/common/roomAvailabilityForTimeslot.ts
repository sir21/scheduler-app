import { RoomAvailableStatus } from "./RoomAvailabilityStatus";

export interface RoomAvailabilityForTimeslot {
    capacity: number;
    level: number;
    name: string;
    status: RoomAvailableStatus;
}