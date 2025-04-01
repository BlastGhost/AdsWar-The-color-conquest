import { Router } from "express";
import gameGroupRoutes from "./game/game_group_routes.js";
import gameShopRoutes from "./game/game_shop_routes.js";
import gamePlayRoutes from "./game/game_play_routes.js";
import { GameServer } from "../../src/game/GameServer.js";



const gameRoutes = Router();





gameRoutes.use("/*", async (request, response, next) => {
    const { token } = request.body;

	if (!token) return next({ code: 400, message: `The token must be provided` });
	// if (!bot_connection.checkPassword(password)) return next({ code: 401, message: `Unauthorised access` });

    const player = GameServer.getProfile(token)

	return next();
});





gameRoutes.post("/dashboard", async (request, response, next) => {
    return response.status(200).json();
});


gameRoutes.post("/map", async (request, response, next) => {
    // Selected position
    // Zoom



    // Tiles
    // Zones


    return response.status(200).json();
});



gameRoutes.post("/shop", gameShopRoutes);
gameRoutes.post("/groups", gameGroupRoutes);

gameRoutes.post("/play", gamePlayRoutes);






export default gameRoutes;