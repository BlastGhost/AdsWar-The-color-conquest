import express from "express";
import { Network } from "./src/network/Network.js";
// import { CacheManager } from "./api/cache/CacheManager.js"





export const app = express();



/* -------------------------------- Database -------------------------------- */

import { Database } from "./database/Database.js";


/* ----------------------------------- API ---------------------------------- */

import { GameServer } from "./src/game/GameServer.js";
import { API } from "./api/API.js";



/* ------------------------------ Start Server ------------------------------ */

API.start();                    // Démarre l'API
await Network.start(app);       // Démarre les systèmes de communication (HTTP & Socket)
Database.start();               // Connection à la base de données

GameServer.start();             // Démarre le serveur de jeu