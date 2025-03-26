import Game from "../../game/Game.js";
import { GameServer } from "../../game/GameServer.js";
import Player from "../../game/world/player/Player.js";
import Color from "../../game/world/utils/Color.js";
import GPS from "../../game/world/utils/GPS.js";
import ClientPacket from "../packets/ClientPacket.js";
import ClientPlayerPaintPacket from "../packets/ClientPlayerPaintPacket.js";
import Packet from "../packets/Packet.js";
import { SOCKET_EVENTS_LISTENER } from "./SocketEventsListener.js";



export namespace PlayerEventHandler {
    const game = GameServer.game;


    export function handler(event: string, packet: ClientPacket): void {
        const player = GameServer.players.get(packet.playerId);

        if (!player) {
            console.error(`[Socket] Error Player : Player not found : ${packet.playerId}`);
            return;
        }


        updatePosition(player, packet);

        // switch (event) {
        //     case SOCKET_EVENTS_LISTENER.UPDATE_POSITION: break;

        //     case SOCKET_EVENTS_LISTENER.PAINT: 
        //         paint(player, packet as ClientPlayerPaintPacket);
        //         break;

        //     default:
        //         console.error(`[Socket] Error Player : Wrong event received : ${event}`);
        //         break;
        // }
    }



    function updatePosition(player: Player, packet: ClientPacket): void {
        player.updatePositionFromGPS(packet.playerLongitude, packet.playerLatitude);
    }



    // function paint(player: Player, packet: ClientPlayerPaintPacket): void {
    //     const gpsPosition = new GPS(packet.targetLongitude, packet.targetLatitude);
    //     const position = gpsPosition.toVector2();

    //     const zone = game.getZoneWithTile(position);
    //     if (!zone) return console.error(`[Socket] Error Player : Zone not found at : ${packet.targetLongitude}, ${packet.targetLatitude}`);


    //     const tile = zone?.getTile(position.x, position.y);
    //     if (!tile) return console.error(`[Socket] Error Player : Tile not found at : ${packet.targetLongitude}, ${packet.targetLatitude}`);


    //     if (game.canPaintIn(player, zone, tile))
    //         game.playerPaint(player, tile, packet.color);
    // } 


    export function paint(player: Player, targetLongitude: number, targetLatitude: number, color: Color): boolean {
        const gpsPosition = new GPS(targetLongitude, targetLatitude);
        const position = gpsPosition.toVector2();

        const zone = game.getZoneWithTile(position);
        if (!zone) 
            return (console.error(`[Socket] Error Player : Zone not found at : ${targetLongitude}, ${targetLatitude}`), false);

        const tile = game.getTile(position);
        if (!tile) 
            return (console.error(`[Socket] Error Player : Tile not found at : ${targetLongitude}, ${targetLatitude}`), false);
        
        if (game.canPaintAt(player, position, zone))
            game.playerPaint(player, tile, color);

        return true;
    }
}