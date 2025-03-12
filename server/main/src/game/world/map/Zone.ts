import TileManager from "../../managers/TileManager.js";
import Group from "../player/Group.js";
import Player from "../player/Player.js";
import Position from "../utils/Position.js";
import Vector2 from "../utils/Vector2.js";
import Tile from "./Tile.js";



/**
 * Représente une zone sur le terrain
 */
export default class Zone {
    public static readonly SIZE = 11;

    public tiles = new TileManager();
    /** Le point de départ de la zone (en haut à gauche) */
    public position: Vector2;
    /** La taille de la zone (en bas à droite) */
    public size: Vector2;
    public claimer?: Group;

    public adForAll: boolean = false;
    public oneAd: boolean = true;
    public adWatched: number = -1;






    constructor(positionX: number, positionY: number, sizeX: number = Zone.SIZE, sizeY: number = Zone.SIZE) {
        this.position = new Vector2(positionX, positionY);
        this.size = new Vector2(sizeX, sizeY);

        this._init();
    }




    private _init() {
        // this._initTiles();
    }

    private _initTiles() {
        const xSize = Zone.SIZE;
        const ySize = Zone.SIZE;

        for (let x = -xSize / 2; x < xSize / 2; x++) {
            for (let y = -ySize / 2; y < ySize / 2; y++) {

                const tile = new Tile(x, y);
                this.tiles.set(tile.position.toMinimalString(), tile);

            }
        }
    }



    public get isClaimed(): boolean {
        return this.claimer !== undefined;
    }





    public notify(): void {
        this.claimer?.notifyPlayers();
    }





    /**
     * Regarde si la zone contient les coordonnées données
     * @param x La coordonnée x que l'on souhaite
     * @param y La coordonnée y que l'on souhaite
     * @returns true si les coordonnées sont dans la zone, false sinon
     */
    public hasCoord(x: number, y: number): boolean;
    /**
     * Regarde si la position donnée se trouve dans la zone
     * @param position La position que l'on souhaite
     * @returns true si la position est dans la zone, false sinon
     */
    public hasCoord(position: Position): boolean;
    public hasCoord(xOrPos: number | Position, y?: number): boolean {
        if (typeof xOrPos === "number") {
            if (!y) return console.error("Has Coord but y coordinate missing"), false;

            return this.position.x <= xOrPos &&
                this.position.y <= y &&
                this.position.x + this.size.x > xOrPos &&
                this.position.y + this.size.y > y;
        }
        else {
            return this.hasCoord(xOrPos.x, xOrPos.y);
        }
    }



    public getTile(position: Position): Tile | undefined;
    public getTile(x: number, y: number): Tile | undefined;
    public getTile(xOrPosition: number | Position, y?: number): Tile | undefined {
        if (typeof xOrPosition === "number") {
            if (!y) return console.error("Get Tile but y coordinate missing"), undefined;
            if (!this.hasCoord(xOrPosition, y)) return undefined;

            return this.tiles.getTile(xOrPosition, y);
        }
        else {
            return this.getTile(xOrPosition.x, xOrPosition.y);
        }
    }



    public canPaintIn(player: Player): boolean {
        if (!this.isClaimed) return true;
        return player.groups.has(this.claimer!.id);
    }





    /* -------------------------------------------------------------------------- */
    /*                                    Claim                                   */
    /* -------------------------------------------------------------------------- */

    public onClaim(): void {
        this.oneAd = false;
    }

    public onUnclaim(): void {
        this.oneAd = true;

        this.onAllAdWatched();
    }


    public onInfection(): void {
        this.adForAll = true;
        this.adWatched = 0;
    }


    public onAdWatch(): void {
        this.adWatched++;

        if (this.adWatched === this.claimer?.players.length)
            this.onAllAdWatched();
    }



    public onAllAdWatched(): void {
        this.adForAll = false;
        this.adWatched = -1;
    }
}
