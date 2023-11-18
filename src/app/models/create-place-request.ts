import { Address } from "./address";
import { RoomDTO } from "./roomDTO";

export interface CreatePlaceRequest{
    name: string;
    description: string;
    address: Address;
    category:string;
    userId:number;
    rooms:RoomDTO[];
}