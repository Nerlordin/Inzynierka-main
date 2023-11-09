import { Address } from "./address";
import { RoomDTO } from "./roomDTO";

export interface Place{
    id:number;
    name: string;
    description: string;
    address: Address;
       placeCategory: string;
    userId:number;
    rooms: RoomDTO[];
    facilities: string[];
}