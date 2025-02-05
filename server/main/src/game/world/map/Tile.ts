import Player from "../player/Player.js";
import Color from "../utils/Color.js";
import GPS from "../utils/GPS.js";
import Vector2 from "../utils/Vector2.js";



export default class Tile {
    public static readonly SIZE = 20;
    public static readonly WIDTH = Tile.SIZE * GPS.DEGREE_M;
    public static readonly HEIGHT = Tile.SIZE * GPS.DEGREE_M;

    public position: Vector2;
    public color: Color;
    public painter?: Player;



    constructor() {

    }



    public get hasPainter(): boolean {
        return this.painter !== undefined;
    }




    public paint(player: Player, color: Color): void {
        this.painter = player;
        this.color = color;

        this.onPaint(player);
    }


    /* -------------------------------------------------------------------------- */
    /*                                   Events                                   */
    /* -------------------------------------------------------------------------- */

    private onPaint(player: Player): void {
        // TODO : Notify players
    }
}