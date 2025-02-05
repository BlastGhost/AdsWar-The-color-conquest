import Inventory from "../../src/game/world/inventory/Inventory.js";
import ItemStack from "../../src/game/world/inventory/ItemStack.js";



export class InventoryData {
    public paintLitre: number;
    public items: ItemStackData[];
    public coin: number;
    


    constructor(inventory: Inventory) {
        this.paintLitre = inventory.paintLitre;
        this.items = inventory.items.map(itemStack => new ItemStackData(itemStack));
        this.coin = inventory.coin;
    }
}


export class ItemStackData {
    public item: string;
    public count: number;



    constructor(itemStack: ItemStack) {
        this.item = itemStack.item.name;
        this.count = itemStack.count;
    }   
}