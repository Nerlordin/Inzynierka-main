export class SearchPlaceFilter{

    constructor(
        capacity: number,
        pricePerNight: number,
        voivodeship:string,
        street:string,
        city:string,
        placeId:number | null ,
        from: string,
        to:string,
        category: string) {
            this.pricePerNight = pricePerNight;
            this.street = street;
            this.city = city;
            this.category = category;
            this.to = to;
            this.capacity = capacity;
            this.from = from;
            this.placeId = placeId;
            this.voivodeship = voivodeship;
        }

        public  getCapacity(): number {
            return this.capacity;
        }
        public  getCategory(): string {
            return this.category;
        }
        public  getCity(): string {
            return this.city;
        }
        public  getStreet(): string {
            return this.street;
        }
       
    public  getPricePerNight(): number {
        return this.pricePerNight;
    }
 
   pricePerNight: number;
placeId: number | null;
  capacity: number;
  voivodeship:string;
  street:string;
  city:string;
  from:string;
  to:string;
  category: string;
}
