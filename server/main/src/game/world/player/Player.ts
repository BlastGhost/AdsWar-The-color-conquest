import { PlayerData } from "../../../../database/schemas/player_schema.js";
import { NanoId } from "../../../utils/nanoid.js";
import GroupManager from "../../managers/GroupManager.js";
import Inventory from "../inventory/Inventory.js";
import Tile from "../map/Tile.js";
import Vector2 from "../utils/Vector2.js";
import Group from "./Group.js";
import Team from "./Team.js";



export default class Player {
    public static readonly PAINT_RADIUS = 3;

    public id: string;
    public username: string;
    public team?: Team;
    public groups: GroupManager;
    public inventory: Inventory;
    public position: Vector2;



    constructor(username: string) {
        this.id = NanoId.generateId();
        this.username = username;
        this.position = Vector2.ZERO;
        this.groups = new GroupManager();
        this.inventory = new Inventory(this);
    }



    public joinGroup(group: Group) {
        this.groups.set(group.id, group);
    }

    public leaveGroup(group: Group) {
        this.groups.delete(group.id);
    }

    public leaveAllGroups() {
        this.groups.leaveAll(this);
        this.groups.clear();
    }


    public joinTeam(team: Team) {
        this.team = team;
    }

    public leaveTeam() {
        this.team = undefined;
    }



    public isCloseEnoughToPaint(tile: Tile): boolean {
        return this.distanceTo(tile) <= Player.PAINT_RADIUS;
    }



    public distanceTo(tile: Tile): number;
    public distanceTo(player: Player): number;
    public distanceTo(position: Vector2): number;
    public distanceTo(x: number, y: number): number;
    public distanceTo(xOrTileOrPlayerOrPosition: Tile | Player | Vector2 | number, y?: number): number {
        let position: Vector2;

        if (xOrTileOrPlayerOrPosition instanceof Tile) {
            position = xOrTileOrPlayerOrPosition.position;
        }
        else if (xOrTileOrPlayerOrPosition instanceof Player) {
            position = xOrTileOrPlayerOrPosition.position;
        }
        else if (xOrTileOrPlayerOrPosition instanceof Vector2) {
            position = xOrTileOrPlayerOrPosition;
        }
        else {
            position = new Vector2(xOrTileOrPlayerOrPosition, y!);
        }

        return this.position.distanceTo(position);
    }





    public static load(data: PlayerData): Player {
        const player = new Player(data.username);
        
        player.id = data.id;
        // TODO : Groups
        player.inventory = Inventory.load(player, data.inventory);

        return player;
    }
}