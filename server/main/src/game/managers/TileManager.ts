import Manager from "./Manager.js";
import Tile from "../world/map/Tile.js";



export default class TileManager extends Manager<Tile> {
    constructor() {
        super();
    }



    public getTile(x: number, y: number): Tile | undefined {
        return this.get(`${x}:${y}`);
    }
}