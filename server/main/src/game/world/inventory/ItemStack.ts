import Item from "../item/Item.js";
import Player from "../player/Player.js";



export default class ItemStack {
    public item: Item;
    public count: number;



    constructor(item: Item, count: number) {
        this.item = item;
        this.count = count;
    }



    public use(player: Player): void {
        this.item.use(player);
        this.count;
    }
}