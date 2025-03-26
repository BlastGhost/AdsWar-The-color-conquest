import Node from "../../../utils/tree/Node.js";
import QuadTree from "../../../utils/tree/QuadTree.js";
import Color from "../utils/Color.js";
import Position from "../utils/Position.js";
import Vector2 from "../utils/Vector2.js";
import Tile from "./Tile.js";



export default class Terrain extends QuadTree<Color> {
    public getTileWithPosition(position: Position): Tile | undefined {
        const color = this._getTile(position.x, position.y, this.root);
        return color ? new Tile(position.x, position.y, color) : undefined;
    }

    public getTile(x: number, y: number): Tile | undefined {
        const color = this._getTile(x, y, this.root);
        return color ? new Tile(x, y, color) : undefined;
    }


    private _getTile(x: number, y: number, currentNode: Node<Color>): Color | undefined {
        if (currentNode.position.x === x && currentNode.position.y === y)
            return currentNode.data
        
        if (currentNode.isAtomic)
            return undefined;


        const nodeSize = currentNode.size.scale(0.5).floor()


        if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topLeft)
                return undefined;

            return this._getTile(x, y, currentNode.topLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topRight)
                return undefined;

            return this._getTile(x, y, currentNode.topRight);
        }

        else if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomLeft)
                return undefined;

            return this._getTile(x, y, currentNode.bottomLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomRight)
                return undefined;

            return this._getTile(x, y, currentNode.bottomRight);
        }


        return undefined
    }
}