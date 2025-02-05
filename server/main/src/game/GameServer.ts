import { PacketManager } from "../network/packets/PacketManager.js";
import { SocketEvents } from "../network/socket/SocketEvents.js";
import { Time } from "../utils/time.js";
import Game from "./Game.js";
import GroupManager from "./managers/GroupManager.js";
import PlayerManager from "./managers/PlayerManager.js";
import ProfileManager from "./managers/ProfileManager.js";
import Profile from "./profile/Profile.js";
import Group from "./world/player/Group.js";
import Player from "./world/player/Player.js";



/**
 * Représente le serveur de jeu global
 * 
 * Le serveur de jeu gère tous les profils ainsi que les différents lobbys de jeu
 */
export namespace GameServer {
    /** Tous les profiles connectés au serveur */
    export const profiles: ProfileManager = new ProfileManager();
    export const players: PlayerManager = new PlayerManager();
    export const groups: GroupManager = new GroupManager();


    /** Toutes les 10 minutes */
    const timeInterval = 10 * Time.values.minute;
    let cleanInterval: NodeJS.Timeout;
    export let game: Game;



    /**
     * Démarre le serveur
     */
    export function start(): void {
        console.log("[Game Server] Starting...");


        // Start a new game
        game = new Game();



        clean();
        cleanInterval = setInterval(() => {
            clean();
        }, timeInterval);
    }

    /**
     * Arrête le serveur
     */
    export function stop(): void {
        if (cleanInterval) {
            clearInterval(cleanInterval);
        }
    }

    /**
     * Nettoie la base de donnée des lobby, parties et entités qui ne servent plus
     */
    async function clean() {
        console.log("[Game Server] Clean");

    }





    /* -------------------------------------------------------------------------- */
    /*                                   Groups                                   */
    /* -------------------------------------------------------------------------- */

    export function getGroupById(groupId: string): Group | undefined {
        return groups.get(groupId);
    }
    




    /* -------------------------------------------------------------------------- */
    /*                                   Socket                                   */
    /* -------------------------------------------------------------------------- */

    /**
     * Envoie un message socket à tous les profiles connectés
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer si il y en a
     */
    export function sendSocketToAll<E extends SocketEvents>(event: E, data: PacketManager.DataForPacket<E>): void {        
        profiles.sendSocket(event, data);
    }


    export function connection() {}


    export function deconnection() {}

}