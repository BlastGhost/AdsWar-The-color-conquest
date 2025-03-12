import { app } from "../server.js";
import gameRoutes from "./routes/game_routes.js";
import apiRoutes from "./routes/routes.js";





export namespace API {

    export function start() {
        console.log("[API] starting...")
        app.use("/api", apiRoutes);
        app.use("/game", gameRoutes)
        
        import('./routes/routes.js');
        import('./routes/global_routes.js');
    }

}