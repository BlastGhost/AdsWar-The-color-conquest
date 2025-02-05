import GameEvent from "./GameEvent.js";
import Player from "../world/player/Player.js";



export default abstract class RankedEvent extends GameEvent {
    public ranks: Map<string, number>;



    constructor() {
        super();
    }

    

    public abstract getId(player: Player): string | undefined;

    public playerAction(player: Player): void {
        const id = this.getId(player);
        if (!id) return;

        if (this.ranks.has(id)) {
            const currentScore = this.ranks.get(id) ?? 0;
            this.ranks.set(id, currentScore + 1);
        } else {
            this.ranks.set(id, 1);
        }
    }
}