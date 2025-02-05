import http from "http";
import cors from "cors";
import server_config from "../../configuration/server_config.js";
import { SocketProtocol } from "./socket/SocketProtocol.js";




/**
 * Le système de communication
 */
export namespace Network {
    export let httpServer: http.Server;





    /**
     * Lance tous les systèmes de communication entre le serveur et les clients
     * @param app L'application express
     */
    export async function start(app: any): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            console.log("[Server] starting...");
            httpServer = http.createServer(app);
    
            app.use(cors({ origin: "*" }));
    
            await startHttpServer();
            SocketProtocol.start(httpServer, server_config.DEFAULT_SOCKET_PORT);

            console.log("[Server] Running");
            return resolve();
        })
    }





    /**
     * Lance le serveur http
     */
    async function startHttpServer(): Promise<void> {
        console.log("[HTTP] starting...");
        const port: number = server_config.DEFAULT_HTTP_PORT;

        return new Promise<void>((resolve, reject) => {      
            httpServer.listen((port), () => {
                console.log(`[HTTP] Server listening on : ${port}`);
                return resolve();
            });
        })
    }
}