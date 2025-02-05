import ZoneManager from "./managers/ZoneManager.js";
import Tile from "./world/map/Tile.js";
import Zone from "./world/map/Zone.js";
import Player from "./world/player/Player.js";
import Color from "./world/utils/Color.js";
import Position from "./world/utils/Position.js";
import Vector2 from "./world/utils/Vector2.js";



export default class Game {
    public lastUpdate: number;

    public zones: ZoneManager = new ZoneManager();
    



    constructor() {

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