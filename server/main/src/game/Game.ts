import Location from "./data/Location.js";
import ZoneManager from "./managers/ZoneManager.js";
import Terrain from "./world/map/Terrain.js";
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
    public terrain: Terrain;
    public startPositionGPS: GPS;
    public endPositionGPS: GPS;
    public startPositionVector: Vector2;
    public endPositionVector: Vector2;

    public points: Map<string, number> = new Map();
    public tilesPainter: Map<string, string> = new Map();
    
    



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
            return this.terrain.getTile(xOrPosition, y);
        }
        else 
            return this.terrain.getTileWithPosition(xOrPosition);
    }

    // public canPaintIn(player: Player, zone: Zone, tile: Tile): boolean {
    //     if (!zone.isClaimed)
    //         return player.isCloseEnoughToPaint(tile);
    //     else {
    //         return player.groups.has(zone.claimer!.id);
    //     }
    // }

    public canPaintAt(player: Player, position: Vector2, zone?: Zone): boolean {
        zone = zone ?? this.getZoneWithTile(position);
        if (!zone)
            return false;

        if (!zone.isClaimed)
            return player.isCloseEnoughToPaint(position);
        else {
            return player.groups.has(zone.claimer!.id);
        }
    }



    public playerPaint(player: Player, tile: Tile, color: Color): void {
        const position = tile.position;
        const positionString = position.toMinimalString()
        const painter = tile.painter;

        // Points management
        if (painter) this.removePointFrom(painter.id);
        this.givePointTo(player.id);
        
        // Set the painter of the tile
        this.tilesPainter.set(positionString, player.id);

        // Change the color on the terrain
        this.terrain.set(color, position.x, position.y, this.terrain.root);
    }


    /**
     * Give points to the player
     * @param player The player
     */
    public givePointTo(player: string) {
        // If the player doesn't have points
        // Then we set them at 1
        if (!this.points.has(player))
            this.points.set(player, 1);
        // Otherwise we just add the points
        else {
            const currentPoint = this.points.get(player)!;
            this.points.set(player, currentPoint + 1);
        }
    }

    /**
     * Remove points from the player
     * @param player The player
     */
    public removePointFrom(player: string) {
        // If the player has points
        // Then we remove points from it scores
        if (this.points.has(player)) {
            const currentPoint = this.points.get(player)!;

            // If the player has no point anymore
            // We remove it from the cache
            if (currentPoint - 1 <= 0)
                this.points.delete(player);
            else
                this.points.set(player, currentPoint - 1);
        }
    }
}