import Player from '../world/player/Player.js';
import RankedEvent from './RankedEvent.js';



export default abstract class GroupRankedEvent extends RankedEvent {
    public getId(player: Player): string {
        return player.groups.values[0].id;
    }
}