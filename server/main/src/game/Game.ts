import Location from "./data/Location.js";
import ZoneManager from "./managers/ZoneManager.js";
import Tile from "./world/map/Tile.js";
import Zone from "./world/map/Zone.js";
import Player from "./world/player/Player.js";
import Color from "./world/utils/Color.js";
import GPS from "./world/utils/GPS.js";
import Position from "./world/utils/Position.js";
import Vector2 from "./world/utils/Vector2.js";



export default class Game {
    public startTimestamp: number;
    public lastUpdate: number;
    public endTimestamp: number;

    public zones: ZoneManager = new ZoneManager();
    public startPositionGPS: GPS;
    public endPositionGPS: GPS;
    public startPositionVector: Vector2;
    public endPositionVector: Vector2;
    
    



    constructor(location: Location);
    constructor(startPosition: GPS, endPosition: GPS);
    constructor(locationOrStart: Location | GPS, endPosition?: GPS) {
        if (locationOrStart instanceof Location) {
            this.setStartPosition(locationOrStart.start);
            this.setEndPosition(locationOrStart.end);
        }
        else if (locationOrStart instanceof GPS) {
            this.setStartPosition(locationOrStart);
            this.setEndPosition(endPosition!);
        }


        this._init();

        console.log(`[Game] New Game created`);
        console.log(`- Size (m) : ${this.size}`);
        console.log(`- Zone (?) : ${this.zones.size}`);
        console.log(`- Tile (?) : ${this.size.scale(1 / 20)}`);
    }





    
    private _init() {
        this._initZones();
    }

    private _initZones() {
        const size = this.size;
        const xSize = size.x / (Zone.SIZE * Tile.SIZE);
        const ySize = size.y / (Zone.SIZE * Tile.SIZE);

        for (let x = -xSize / 2; x < xSize / 2; x++) {
            for (let y = -ySize / 2; y < ySize / 2; y++) {

                const zone = new Zone(x, y);
                this.zones.set(zone.position.toMinimalString(), zone);

            }
        }
    }



    

    public setStartPosition(position: GPS): void {
        this.startPositionGPS = position;
        this.startPositionVector = position.toVector2();
    }

    public setEndPosition(position: GPS): void {
        this.endPositionGPS = position;
        this.endPositionVector = position.toVector2();
    }



    public get size(): Vector2 {
        const x = Math.abs(this.endPositionVector.x - this.startPositionVector.x);
        const y = Math.abs(this.endPositionVector.y - this.startPositionVector.y);
        
        return new Vector2(x, y);
    }





    public start(): void {
    }



    public getZone(x: number, y: number): Zone | undefined;
    public getZone(position: Vector2): Zone | undefined;
    public getZone(xOrPosition: number | Vector2, y?: number): Zone | undefined {
        if (typeof xOrPosition === "number") {
            if (!y) return console.error("[Game] Error while getting zone : y is missing"), undefined;
            return this.getZone(new Vector2(xOrPosition, y));
        }
        else {
            return this.zones.get(xOrPosition.toMinimalString());
        }
    }


    public getZoneWithTile(x: number, y: number): Zone | undefined;
    public getZoneWithTile(position: Position): Zone | undefined;
    public getZoneWithTile(xOrPosition: number | Position, y?: number): Zone | undefined {
        if (typeof xOrPosition === "number") {
            if (!y) return console.error("[Game] Error while getting zone : y is missing"), undefined;
            return this.getZoneWithTile(new Vector2(xOrPosition, y));
        }
        else {
            return this.zones.getWithTile(xOrPosition);
        }
    }



    public getTile(x: number, y: number): Tile | undefined;
    public getTile(position: Position): Tile | undefined;
    public getTile(xOrPosition: number | Position, y?: number): Tile | undefined {
        if (typeof xOrPosition === "number") {
            if (!y) return console.error("[Game] Error while getting tile : y is missing"), undefined;
            return this.getTile(new Vector2(xOrPosition, y));
        }
        else {
            const zone = this.getZoneWithTile(xOrPosition);
            if (!zone) return undefined;
            return zone.getTile(xOrPosition);
        }

    }

    public canPaintIn(player: Player, zone: Zone, tile: Tile): boolean {
        if (!zone.isClaimed)
            return player.isCloseEnoughToPaint(tile);
        else {
            return player.groups.has(zone.claimer!.id);
        }
    }

    public playerPaint(player: Player, tile: Tile, color: Color): void {
        tile.paint(player, color);
    }
}