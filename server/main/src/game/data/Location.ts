import GPS from "../world/utils/GPS.js";



export default class Location {
    public name: string;
    public startLongitude: number;
    public startLatitude: number;
    public endLongitude: number;
    public endLatitude: number;

    public start: GPS;
    public end: GPS;



    constructor(name: string, start: GPS, end: GPS) {
        this.name = name;
        this.start = start;
        this.end = end;

        this.startLongitude = start.longitude;
        this.startLatitude = start.latitude;
        this.endLongitude = end.longitude;
        this.endLatitude = end.latitude;
    }
    




    public get center(): GPS {
        return new GPS(
            (this.startLongitude + this.endLongitude) / 2,
            (this.startLatitude + this.endLatitude) / 2
        );
    }




    public static Builder(name: string) {
        return new LocationBuilder(name);
    }
}




export class LocationBuilder {
    private name: string;
    private start: GPS;
    private end: GPS;



    constructor(name: string) {
        this.name = name;
    }


    public withStart(longitude: number, latitude: number): LocationBuilder;
    public withStart(start: GPS): LocationBuilder;
    public withStart(lonOrStart: GPS | number, latitude?: number): LocationBuilder {
        if (typeof lonOrStart === "number") {
            return this.withStart(new GPS(lonOrStart, latitude!));
        }
        else {
            this.start = lonOrStart
            return this;
        }
    }
    
    public withEnd(longitude: number, latitude: number): LocationBuilder;
    public withEnd(start: GPS): LocationBuilder;
    public withEnd(lonOrEnd: GPS | number, latitude?: number): LocationBuilder {
        if (typeof lonOrEnd === "number") {
            return this.withEnd(new GPS(lonOrEnd, latitude!));
        }
        else {
            this.end = lonOrEnd
            return this;
        }
    }



    public build(): Location {
        return new Location(this.name, this.start, this.end);
    }
}