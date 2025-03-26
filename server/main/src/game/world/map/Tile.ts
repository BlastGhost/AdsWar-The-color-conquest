import Comparable from "../../../utils/Comparable.js";
import { GameServer } from "../../GameServer.js";
import Player from "../player/Player.js";
import Color from "../utils/Color.js";
import GPS from "../utils/GPS.js";
import Vector2 from "../utils/Vector2.js";



export default class Tile implements Comparable<Tile> {
    public static readonly SIZE = 20;
    public static readonly WIDTH = Tile.SIZE * GPS.LONGITUDE_DEGREE_M;
    public static readonly HEIGHT = Tile.SIZE * GPS.LATITUDE_DEGREE_M;

    public color: Color;
    public painter?: Player;
    public position: Vector2;



    constructor(x: number, y: number, color: Color);
    constructor(position: Vector2, color: Color);
    constructor(xOrposition: number | Vector2, yOrColor: number | Color, color?: Color) {
        if (typeof xOrposition === "number" && typeof yOrColor === "number") 
            xOrposition = new Vector2(xOrposition, yOrColor);

        this.position = xOrposition as Vector2;

        if (color)
            this.color = color ?? yOrColor

        const painterId = GameServer.game.tilesPainter.get(this.position.toMinimalString());
        this.painter = painterId ? GameServer.players.get(painterId) : undefined;

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





    public equals(other: Tile): boolean {
        return other.color === this.color
    }
}