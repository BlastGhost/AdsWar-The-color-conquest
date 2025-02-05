import mongoose from "mongoose";
import server_config from "../configuration/server_config.js";



/**
 * Connection à MongoDB
 */
export default async function connection(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        console.log("[MongoDB] connection...")
        
        mongoose.connect(server_config.DATABASE_LINK)
            .then(() => {
                console.log("[MongoDB] Connected");
                return resolve();
            })
            .catch((reason) => {
                console.error(`[MongoDB] Error while connecting to the database`);
                console.error(reason);
                return reject();
            }); 
    });
}