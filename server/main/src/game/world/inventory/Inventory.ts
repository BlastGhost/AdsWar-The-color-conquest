import { InventoryData } from "../../../../database/schemas/inventory_schema.js";
import Item from "../item/Item.js";
import Player from "../player/Player.js";
import ItemStack from "./ItemStack.js";



export default class Inventory {
    public static readonly PAINT_LITRE_PER_TIME = 20;

    private player: Player;
    public paintLitre: number = 0;
    public items: ItemStack[] = [];
    public coin: number;



    constructor(player: Player) {
        this.player = player;

    }



    public addItem(item: Item): void;
    public addItem(item: Item, count: number): void;
    public addItem(item: Item, count: number = 1): void {
        this.items.push(new ItemStack(item, count));
    }


    public useItem(item: Item) {
        const itemStack = this.items.find(itemStack => itemStack.item === item);
        if (!itemStack)
            return console.error("Item not found in inventory");

        itemStack.use(this.player);
    }



    public addCoin(coin: number) {
        this.coin += coin;
    }

    public removeCoin(coin: number) {
        this.coin -= coin;
    }



    public static load(player: Player, data: InventoryData): Inventory {
        const inventory = player.inventory;

        inventory.paintLitre = data.paintLitre;
        // inventory.items = data.items.map((itemStack: any) => ItemStack.load(itemStack));
        inventory.coin = data.coin;

        return inventory;
    }

}