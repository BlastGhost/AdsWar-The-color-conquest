import { app } from "../server.js";
import apiRoutes from "./routes/routes.js";





export namespace API {

    export function start() {
        console.log("[API] starting...")
        app.use("/api", apiRoutes);
        
        import('./routes/routes.js');
        import('./routes/global_routes.js');
    }

}