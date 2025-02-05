import Zone from "../world/map/Zone.js";
import Position from "../world/utils/Position.js";
import Vector2 from "../world/utils/Vector2.js";
import Manager from "./Manager.js";



export default class ZoneManager extends Manager<Zone> {
    public getWithTile(x: number, y: number): Zone | undefined;
    public getWithTile(position: Position): Zone | undefined;
    public getWithTile(xOrPosition: number | Position, y?: number): Zone | undefined {
        if (typeof xOrPosition === "number") {
            if (!y) return console.error("[ZoneManager] Error while getting zone : y is missing"), undefined;
            return this.getWithTile(new Vector2(xOrPosition, y));
        }
        else {
            return this.values().find(z => z.hasCoord(xOrPosition));
        }
    }
}