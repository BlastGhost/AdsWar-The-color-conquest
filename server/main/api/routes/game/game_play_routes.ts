import { Router } from "express";
import Player from "../../../src/game/world/player/Player.js";
import { GameServer } from "../../../src/game/GameServer.js";
import { PlayerEventHandler } from "../../../src/network/socket/PlayerEventHandler.js";
import Color from "../../../src/game/world/utils/Color.js";



const gamePlayRoutes = Router();





gamePlayRoutes.post("/paint", async (request, response, next) => {
    // Position
    const { targetLongitude, targetLatitude, targetColor } = request.body;

    const player: Player = request.locals.player;
    const color = new Color(targetColor);
    const painted = PlayerEventHandler.paint(player, targetLongitude, targetLatitude, color);
    
    return response.status(200).json({
        success: painted
    });
});



gamePlayRoutes.post("/use", async (request, response, next) => {
    // Item to use
    // Position

    return response.status(200).json();
});





export default gamePlayRoutes;