import mongoose from "mongoose";
import GameSchema from "./game_schema.js";
import LobbySchema from "./lobby_schema.js";
import EntitySchema from "./entity_schema.js";



export default {
    Lobbies: mongoose.model("Lobby", LobbySchema),
    Games: mongoose.model("Game", GameSchema),
    Entities: mongoose.model("Entity", EntitySchema),
}