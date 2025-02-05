import express from "express";
import { Network } from "./src/network/Network.js";
import { CacheManager } from "./api/cache/CacheManager.js"





export const app = express();



/* -------------------------------- Database -------------------------------- */

// Connexion à MongoDB
// En cas d'erreur le serveur ne démarre pas
import mongodb_connection from "./database/connection.js";

try {
    await mongodb_connection();
} catch (error) {
    console.error("[MongoDB] Connection Error");
    if (error) console.error(error);
    process.exit();
}

// Initialisation de la base de données local
import "./database/local.js";



/* ----------------------------------- API ---------------------------------- */

import { GameServer } from "./src/game/GameServer.js";
import apiRoutes from "./api/routes/routes.js";
app.use("/api", apiRoutes);


import('./api/routes/routes.js');
import('./api/routes/global_routes.js');



/* ------------------------------ Start Server ------------------------------ */

CacheManager.init();            // Initialise le cache

await Network.start(app);       // Démarre les systèmes de communication (HTTP & Socket)

GameServer.start();             // Démarre le serveur de jeu