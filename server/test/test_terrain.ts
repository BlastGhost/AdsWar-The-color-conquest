import Vector2 from "../main/src/game/world/utils/Vector2";
import QuadTree from "../main/src/utils/tree/QuadTree";
import Tile from "../main/src/game/world/map/Tile";
import Color from "../main/src/game/world/utils/Color";
import Terrain from "../main/src/game/world/map/Terrain";



let terrain = new Terrain(new Vector2(8, 8));
        
terrain.set(new Color("blue"), 0, 0, terrain.root);
terrain.set(new Color("blue"), 0, 1, terrain.root);
terrain.set(new Color("blue"), 1, 0, terrain.root);
terrain.set(new Color("blue"), 1, 1, terrain.root);

const terrainSaved = terrain.save();
const newTerrain = Terrain.load(terrainSaved);
console.log(newTerrain)