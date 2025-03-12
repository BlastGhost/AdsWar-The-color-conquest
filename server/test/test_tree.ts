import Vector2 from "../main/src/game/world/utils/Vector2";
import QuadTree from "../main/src/utils/tree/QuadTree";



let tree = new QuadTree<number>(new Vector2(8, 8));
        
tree.set(8, 0, 0, tree.root);
tree.set(8, 0, 1, tree.root);
tree.set(8, 1, 0, tree.root);
tree.set(8, 1, 1, tree.root);

const treeSaved = tree.save();
const newTree = QuadTree.load<number>(treeSaved);
console.log(newTree)