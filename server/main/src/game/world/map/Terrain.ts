import QuadTree from "../../../utils/tree/QuadTree.js";
import Tile from "./Tile.js";

export default class Terrain extends QuadTree<Tile> {
    public getTile(): Tile | undefined {
        return undefined
    }
}