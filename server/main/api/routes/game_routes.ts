import { Router } from "express";
import gameGroupRoutes from "./game/game_group_routes";
import gameShopRoutes from "./game/game_shop_routes";



const gameRoutes = Router();





gameRoutes.use("/*", async (request, response, next) => {
    const { password } = request.body;

	// if (!password) return next({ code: 400, message: `The password must be provided` });
	// if (!bot_connection.checkPassword(password)) return next({ code: 401, message: `Unauthorised access` });

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






export default gameRoutes;