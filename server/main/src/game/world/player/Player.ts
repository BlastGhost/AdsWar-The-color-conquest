import { PlayerData } from "../../../../database/schemas/player_schema.js";
import { NanoId } from "../../../utils/nanoid.js";
import GroupManager from "../../managers/GroupManager.js";
import Inventory from "../inventory/Inventory.js";
import Tile from "../map/Tile.js";
import GPS from "../utils/GPS.js";
import Vector2 from "../utils/Vector2.js";
import Group from "./Group.js";
import Team from "./Team.js";



export default class Player {
    public static readonly PAINT_RADIUS = 3;

    public id: string = NanoId.generateId();
    public username: string;
    public position: Vector2 = Vector2.ZERO;
    public gpsPosition: GPS = GPS.ZERO;
    public inventory: Inventory = new Inventory(this);
    public groups: GroupManager = new GroupManager();
    public team?: Team;



    constructor(username: string) {
        this.username = username;
    }



    public updatePositionFromGPS(x: number, y: number): void;
    public updatePositionFromGPS(gpsPosition: GPS): void;
    public updatePositionFromGPS(position: number | GPS, y?: number): void {
        if (typeof position === "number") {
            this.updatePositionFromGPS(new GPS(position, y!));
        }
        else {
            this.gpsPosition = position;
            this.updatePosition(position.toVector2());
        }
    }

    public updatePosition(x: number, y: number): void;
    public updatePosition(position: Vector2): void;
    public updatePosition(xOrPosition: number | Vector2, y?: number): void {
        if (typeof xOrPosition === "number") {
            this.updatePosition(new Vector2(xOrPosition, y!));
        }
        else {
            this.position = xOrPosition;
        }
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



    // public isCloseEnoughToPaint(tile: Tile): boolean {
    //     return this.distanceTo(tile) <= Player.PAINT_RADIUS;
    // }

    public isCloseEnoughToPaint(position: Vector2): boolean {
        return this.distanceTo(position) <= Player.PAINT_RADIUS;
    }



    public distanceTo(player: Player): number;
    public distanceTo(position: Vector2): number;
    public distanceTo(x: number, y: number): number;
    public distanceTo(xOrTileOrPlayerOrPosition: Player | Vector2 | number, y?: number): number {
        let position: Vector2;

        if (xOrTileOrPlayerOrPosition instanceof Player) {
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