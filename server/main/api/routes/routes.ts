import { Router } from "express";
import Player from "../../src/game/world/player/Player.js";



const apiRoutes = Router();



apiRoutes.get("/test", (request, response, next) => {
    // const player = new Player("test")


    return response.status(200).json({
        player: "test"
    })
})

// apiRoutes.use("/lobbies", lobbyRoutes);
// apiRoutes.use("/games", gameRoutes);
// apiRoutes.use("/entities", entityRoutes);





export default apiRoutes;
