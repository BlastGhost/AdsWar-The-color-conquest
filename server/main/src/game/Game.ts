import Tile from "./world/map/Tile.js";
import Zone from "./world/map/Zone.js";
import Player from "./world/player/Player.js";
import Color from "./world/utils/Color.js";
import Position from "./world/utils/Position.js";



export default class Game {
    public lastUpdate: number;

    public zones: Zone[] = [];
    



    constructor() {

    }





    public start(): void {
    }





    public getTile(position: Position): Tile | undefined {
        const zone = this.zones.find(z => z.hasCoord(position));
        if (!zone) return undefined;
        return zone.getTile(position);
    }

    public canPaintIn(player: Player, zone: Zone, tile: Tile): boolean {
        if (zone.isClaimed) {
            if (!player.groups.has(zone.claimer!.id)) return false;
        }
    
        return player.isCloseEnoughToPaint(tile);
    }

    public playerPaint(player: Player, tile: Tile, color: Color): void {
        tile.paint(player, color);
    }
}