import Player from '../world/player/Player.js';
import RankedEvent from './RankedEvent.js';



export default abstract class TeamRankedEvent extends RankedEvent {
    public getId(player: Player): string | undefined {
        return player.team?.color;
    }
}