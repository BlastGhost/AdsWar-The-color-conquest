import { Maths } from "./Maths.js";
import Position from "./Position.js";
import Vector2 from "./Vector2.js";



export default class GPS extends Position {
    public static readonly ZERO = new GPS(0, 0);
    public static readonly MIN_LATITUDE = -90;
    public static readonly MAX_LATITUDE = 90;
    public static readonly MIN_LONGITUDE = -180;
    public static readonly MAX_LONGITUDE = 180;
    public static readonly AMPLITUDE_LATITUDE = GPS.MAX_LATITUDE - GPS.MIN_LATITUDE;
    public static readonly AMPLITUDE_LONGITUDE = GPS.MAX_LONGITUDE - GPS.MIN_LONGITUDE;
    public static readonly LATITUDE_DEGREE_KM = 110.574;
    public static readonly LONGITUDE_DEGREE_KM = 111.320;
    public static readonly LATITUDE_DEGREE_M = GPS.LATITUDE_DEGREE_KM * 1_000;
    public static readonly LONGITUDE_DEGREE_M = GPS.LONGITUDE_DEGREE_KM * 1_000;


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
        const latitude = this.latitude * GPS.LATITUDE_DEGREE_KM;
        const longitude = this.longitude * GPS.LONGITUDE_DEGREE_KM * Math.cos(Maths.degreeToGrad(this.latitude));

        return new Vector2(
            longitude * 1_000,
            latitude * 1_000
        );
    }
}