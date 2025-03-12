import { NanoId } from "../../../utils/nanoid.js";
import Player from "../player/Player.js";
import { ITEM_TYPE, ItemType } from "./ItemType.js";



/**
 * Représente un objet
 */
export default abstract class Item {  
    /** L'ID de l'objet */
    public id: string;
    /** Le nom de l'objet */
    public name: string;
    /** Le type d'objet */
    public type: ItemType;




    constructor(name: string) {      
        this.id = NanoId.generateId();
        this.name = name;

        this.type = ITEM_TYPE.NORMAL;
    }



    /** Regarde si l'item est un CD */
    public get isCD(): boolean { return this.name.toLowerCase().includes("cd"); }





    /**
     * Execute l'utilisation de l'objet 
     * @param player Le joueur qui utilise l'objet
     */
    public abstract use(player: Player): void;





    /* -------------------------------------------------------------------------- */
    /*                                    Data                                    */
    /* -------------------------------------------------------------------------- */

    public get data() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}
