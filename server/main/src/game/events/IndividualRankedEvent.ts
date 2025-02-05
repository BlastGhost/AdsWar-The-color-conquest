import Player from '../world/player/Player.js';
import RankedEvent from './RankedEvent.js';



export default abstract class IndividualRankedEvent extends RankedEvent {
    public getId(player: Player): string {
        return player.id;
    }
}