import Position from "./Position.js";
import Vector2 from "./Vector2.js";



export default class GPS extends Position {
    public static readonly MIN_LATITUDE = -90;
    public static readonly MAX_LATITUDE = 90;
    public static readonly MIN_LONGITUDE = -180;
    public static readonly MAX_LONGITUDE = 180;
    public static readonly AMPLITUDE_LATITUDE = GPS.MAX_LATITUDE - GPS.MIN_LATITUDE;
    public static readonly AMPLITUDE_LONGITUDE = GPS.MAX_LONGITUDE - GPS.MIN_LONGITUDE;
    public static readonly DEGREE_KM = 111;
    public static readonly DEGREE_M = GPS.DEGREE_KM * 1_000;


    public longitude: number;
    public latitude: number;



    constructor(longitude: number, latitude: number) {
        super();
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public get x(): number {
        return this.longitude;
    }

    public get y(): number {
        return this.latitude;
    }





    public toVector2(): Vector2 {
        return new Vector2(
            this.longitude * GPS.DEGREE_M,
            this.latitude * GPS.DEGREE_M
        );
    }
}