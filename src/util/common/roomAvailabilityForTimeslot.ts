import { RoomAvailableStatus } from "./roomAvailabilityStatus";

export interface RoomAvailabilityForTimeslot {
    capacity: number;
    level: string;
    name: string;
    status: RoomAvailableStatus;
}