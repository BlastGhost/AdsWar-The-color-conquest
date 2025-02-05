import { GroupData } from "../../../../database/schemas/group_schema.js";
import { NanoId } from "../../../utils/nanoid.js";
import Player from "./Player.js";



export default class Group {
    public id: string;
    public name: string;
    public owner: Player;
    public players: Player[] = [];



    constructor(name: string, owner: Player) {
        this.id = NanoId.generateId();
        this.name = name;
        this.owner = owner;
    }



    public addPlayer(player: Player) {
        this.players.push(player);
    }

    public removePlayer(player: Player) {
        this.players = this.players.filter(p => p !== player);
    }



    public notifyPlayers(): void {
        this.players.forEach(player => {
            // TODO : notify player
        });
    }





    /*
    public static load(data: GroupData): Group {
        const group = new Group(data.name, data.owner);
        group.players = data.players;

        return group;
    }
        */
}