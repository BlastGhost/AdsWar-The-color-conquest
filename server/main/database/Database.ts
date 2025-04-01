import mongodb_connection from "./connection.js";

// Initialisation de la base de données local
import "./local.js";





export namespace Database {
    // Connexion à MongoDB
    // En cas d'erreur le serveur ne démarre pas
    export async function start() {
        try {
            await mongodb_connection();
        } catch (error) {
            console.error("[MongoDB] Connection Error");
            if (error) console.error(error);
            process.exit();
        }
    }
}