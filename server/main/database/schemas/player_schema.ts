import mongoose from "mongoose";
import options from "./options.js";
import Player from "../../src/game/world/player/Player.js";
import { InventoryData } from "./inventory_schema.js";



export class PlayerData {
    public id: string;
    public username: string;
    public team?: string;
    public groups: string[] = [];
    public inventory: InventoryData;



    constructor(player: Player) {
        this.username = player.username;
        this.team = player.team?.color;
        this.inventory = new InventoryData(player.inventory);

        player.groups.forEach(g => this.groups.push(g.id));
    }
}



const PlayerSchema = new mongoose.Schema({
    id: {
        $type: String,
        required: true,
        unique: true,
    },
    username: {
        $type: String,
        required: true,
        unique: true,
    },
    team: {
        $type: String,
        default: null,
        required: true,
    },
    groups: {
        $type: [String],
        default: [],
        required: true,
    },
    inventory: {
        $type: Object,
        default: {},
        required: true,
    },
}, options);

export default PlayerSchema