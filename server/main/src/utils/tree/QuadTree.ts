import Vector2 from "../../game/world/utils/Vector2.js";
import Node from "./Node.js";



export default class QuadTree<T> {
    public root: Node<T>;



    constructor(size: Vector2, position: Vector2 = Vector2.ZERO) {
        this.root = new Node(size, position)
    }




    public add(node: Node<T>, currentNode: Node<T>) {
        if (node.position.equals(currentNode.position) && node.size.equals(currentNode.size)) {
            currentNode.data = node.data;
            return;
        }
        
        if (currentNode.isAtomic)
            return;
        

        const nodeSize = currentNode.size.scale(0.5).floor()
        const x = node.position.x;
        const y = node.position.y;


        if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topLeft)
                currentNode.topLeft = new Node(nodeSize, currentNode.position);
            
            this.add(node, currentNode.topLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topRight)
                currentNode.topRight = new Node(nodeSize, currentNode.position.add(nodeSize.x, 0));
            
            this.add(node, currentNode.topRight);
        }

        else if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomLeft)
                currentNode.bottomLeft = new Node(nodeSize, currentNode.position.add(0, nodeSize.y));
            
            this.add(node, currentNode.bottomLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomRight)
                currentNode.bottomRight = new Node(nodeSize, currentNode.position.add(nodeSize));
            
            this.add(node, currentNode.bottomRight);
        }
    }



    public set(data: T, x: number, y: number, currentNode: Node<T>) {
        if (currentNode.isAtomic) {
            currentNode.data = data
            return
        }


        const nodeSize = currentNode.size.scale(0.5).floor()


        if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topLeft)
                currentNode.topLeft = new Node(nodeSize, currentNode.position);

            this.set(data, x, y, currentNode.topLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topRight)
                currentNode.topRight = new Node(nodeSize, currentNode.position.add(nodeSize.x, 0));

            this.set(data, x, y, currentNode.topRight);
        }

        else if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomLeft)
                currentNode.bottomLeft = new Node(nodeSize, currentNode.position.add(0, nodeSize.y));

            this.set(data, x, y, currentNode.bottomLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomRight)
                currentNode.bottomRight = new Node(nodeSize, currentNode.position.add(nodeSize));

            this.set(data, x, y, currentNode.bottomRight);
        }


        this.optimize(currentNode);
    }



    public remove(x: number, y: number, currentNode: Node<T>): boolean {
        if (currentNode.isAtomic) {
            currentNode.data = undefined
            return true
        }

        if (currentNode.isEmpty && currentNode.data)
            currentNode.split();
        
        
        const nodeSize = currentNode.size.scale(0.5).floor();
        let removed: boolean = false;


        if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topLeft)
                return false

            removed = this.remove(x, y, currentNode.topLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y <= y && y < nodeSize.y + currentNode.position.y) {
            if (!currentNode.topRight)
                return false

            removed = this.remove(x, y, currentNode.topRight);
        }

        else if (currentNode.position.x <= x && x < nodeSize.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomLeft)
                return false

            removed = this.remove(x, y, currentNode.bottomLeft);
        }

        else if (currentNode.position.x + nodeSize.x <= x && x < currentNode.size.x + currentNode.position.x
            && currentNode.position.y + nodeSize.y <= y && y < currentNode.size.y + currentNode.position.y) {
            if (!currentNode.bottomRight)
                return false

            removed = this.remove(x, y, currentNode.bottomRight);
        }


        if (removed) {
            this.optimize(currentNode);
        }

        return removed
    }



    public optimize(currentNode: Node<T>) {
        if (currentNode.isFuckingFull && currentNode.childrenEquals()) {
            const commonNode = currentNode.topLeft

            if (commonNode) {
                currentNode.data = commonNode.data
                currentNode.clear()
            }
        }
    }



    public save() {
        const datas: string[] = [];

        this._save(this.root, datas, "r");
        datas.push(JSON.stringify({ position: this.root.position.toMinimalString(), size: this.root.size.toMinimalString() }));

        return datas;
    }


    private _save(currentNode: Node<T>, datas: string[], path: string) {
        if (currentNode.data)
            datas.push(`${path};${currentNode.position.toMinimalString()};${currentNode.size.toMinimalString()};${currentNode.data}`);
        else {
            if (currentNode.topLeft)
                this._save(currentNode.topLeft, datas, path + `0`);

            if (currentNode.topRight)
                this._save(currentNode.topRight, datas, path + `1`);

            if (currentNode.bottomLeft)
                this._save(currentNode.bottomLeft, datas, path + `2`);

            if (currentNode.bottomRight)
                this._save(currentNode.bottomRight, datas, path + `3`);
        }
    } 




    public static load<T>(datas: string[]) {
        const rootData = JSON.parse(datas.pop()!!);
        const tree = new QuadTree<T>(Vector2.of(rootData.size), Vector2.of(rootData.position));


        datas.forEach((data) => {
            const allData = data.split(";");
            const path = allData[0];
            const positionString = allData[1];
            const sizeString = allData[2];
            const nodeData = JSON.parse(allData[3]);
            
            const size = Vector2.of(sizeString); 
            const position = Vector2.of(positionString);

            const node = new Node<T>(size, position);
            node.data = nodeData;

            tree.add(node, tree.root);
        });


        return tree
    }

}