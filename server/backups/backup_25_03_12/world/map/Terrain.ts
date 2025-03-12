// import Vector2 from "../utils/Vector2.js";
// import Block from "./block/Block.js";
// import BlockHolder from "./block/BlockHolder.js";
// import Blocks from "./block/Blocks.js";
// import BlockEntity from "./block/entity/BlockEntity.js";
// import Zone from "./Zone.js";



// /**
//  * Représente un terrain sur lequel les joueurs et les Pokémons se déplacent et combattent
//  */
// export default class Terrain {
//     /** Le nom du terrain */
//     public name: string;
//     /** Les zones ayant des collisions c'est à dire */
//     public collisionZones: Zone[];
//     /** Les blocs entités sur le terrain */
//     public blockEntities: BlockHolder[];





//     constructor(name: string) {
//         this.name = name;

//         this.collisionZones = [];
//         this.blockEntities = [];
//     }





//     /**
//      * Ajoute une zone de collision au terrain
//      * @param zone La zone de collision à ajouter
//      * @returns Le terrain manipulé
//      */
//     public addZone(zone: Zone): this {
//         this.collisionZones.push(zone);
//         return this;
//     }



//     /**
//      * Ajoute un bloc entité dans le terrain à la position donnée 
//      * @param block Le bloc que l'on souhaite ajouter
//      * @param position La position à laquelle le bloc sera placé
//      */
//     public addBlockEntity(block: BlockEntity, position: Vector2): this;
//     /**
//      * Ajoute un bloc dans le terrain aux coordonnées données
//      * @param block Le bloc que l'on souhaite ajouter
//      * @param x La coordonnée x à laquelle le bloc sera placé 
//      * @param y La coordonnée y à laquelle le bloc sera placé 
//      */
//     public addBlockEntity(block: BlockEntity, x: number, y: number): this;
//     public addBlockEntity(block: BlockEntity, xOrPos: number | Vector2, y?: number): this {
//         if (typeof xOrPos === "number") {
//             xOrPos = new Vector2(xOrPos, y);
//         }

//         const holder: BlockHolder = new BlockHolder(block, xOrPos);
//         this.blockEntities.push(holder);

//         return this;
//     }



//     /**
//      * Place le jukebox sur le terrain
//      * @param x La coordonnée x à laquelle le jukebox sera placé
//      * @param y La coordonnée y à laquelle le jukebox sera placé
//      */
//     public placeJukeBox(x: number, y: number): this {
//         return this.addBlockEntity(Blocks.JUKEBOX, x, y);
//     }





//     /**
//      * Récupère une zone en fonction des coordonnées d'un bloc
//      * @param x La coordonnée x du bloc
//      * @param y La coordonnée y du bloc
//      */
//     public getZoneWithBlockCoord(x: number, y: number): Zone;
//     /**
//      * Récupère une zone en fonction de la position d'un bloc
//      * @param position La position du bloc
//      */
//     public getZoneWithBlockCoord(position: Vector2): Zone;
//     public getZoneWithBlockCoord(xOrPos: number | Vector2, y?: number): Zone {
//         if (typeof xOrPos === "number") {
//             return this.collisionZones.find((zone) => zone.hasCoord(xOrPos, y));
//         }
//         else {
//             return this.getZoneWithBlockCoord(xOrPos.x, xOrPos.y);
//         }
//     }



//     /**
//      * Récupère le block à la position demandé
//      * @param position La position du block que l'on souhaite récupérer
//      * @returns Le block si il a été trouvé, undefined sinon
//      */
//     public getBlockAt(position: Vector2): Block {
//         const zone: Zone = this.getZoneWithBlockCoord(position);

//         if (!zone)
//             return this.blockEntities.find((blockHolder) => blockHolder.position.equals(position))?.block;
//         else
//             return zone.block;

//     }
// }