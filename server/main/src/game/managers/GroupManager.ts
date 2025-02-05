import Group from "../world/player/Group.js";
import Player from "../world/player/Player.js";
import Manager from "./Manager.js";



export default class GroupManager extends Manager<Group> {
    public leaveAll(player: Player): void {
        this.forEach(group => group.removePlayer(player));
    }
}