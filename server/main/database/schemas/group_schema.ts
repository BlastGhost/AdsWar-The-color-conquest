import mongoose from "mongoose";
import options from "./options.js";
import Group from "../../src/game/world/player/Group.js";



export class GroupData {
    public id: string;
    public name: string;
    public owner: string;
    public players: string[] = [];


    constructor(group: Group) {
        this.name = group.name;
        this.owner = group.owner.username;
        this.players = group.players.map(p => p.username);
    }
}



const GroupSchema = new mongoose.Schema({
    id: {
        $type: String,
        required: true,
        unique: true,
    },
    name: {
        $type: String,
        required: true,
    },
    owner: {
        $type: String,
        required: true,
    },
    players: {
        $type: [String],
        default: [],
        required: true,
    },
}, options);

export default GroupSchema;