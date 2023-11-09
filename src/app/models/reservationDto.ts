import { RoomId } from "./room-id";

export interface Reservation{
      id: number;
      roomId: RoomId;
      placeId: number;
      checkIn:Date;
      checkOut:Date;
      at:Date;
      userId: number;
      state: string;
      value: number;
     freeCancellationDays: number;
}