import { RoomAvailableStatus } from "./roomAvailabilityStatus";

export interface RoomAvailabilityForTimeslot {
    capacity: number;
    level: number;
    name: string;
    status: RoomAvailableStatus;
}