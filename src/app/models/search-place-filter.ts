export class SearchPlaceFilter{

    constructor(
        capacity: number,
        pricePerNight: number,
        voivodeship:string,
        street:string,
        city:string,
        from: Date | null,
        to:Date | null,
        category: string) {
            this.pricePerNight = pricePerNight;
            this.street = street;
            this.city = city;
            this.category = category;
            this.to = to;
            this.capacity = capacity;
            this.from = from;
            this.voivodeship = voivodeship;
        }
        public  getFrom(): Date | null{
            return this.from;
        }
        public  getTo(): Date  | null {
            return this.to;
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

  capacity: number;
  voivodeship:string;
  street:string;
  city:string;
  from: Date | null;
  to:Date | null;
  category: string;
}
