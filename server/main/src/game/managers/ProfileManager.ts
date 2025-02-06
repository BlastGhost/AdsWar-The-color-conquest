import { PacketManager } from "../../network/packets/PacketManager.js";
import { SocketEvents } from "../../network/socket/SocketEvents.js";
import Game from "../Game.js";
import Profile from "../profile/Profile.js";
import Manager from "./Manager.js";



/**
 * Permet de gérer les profiles
 */
export default class ProfileManager extends Manager<Profile> {
    /**
     * Récupère tous les IDs des profiles
     * @returns Les IDs des profiles
     */
    public getIds(): string[] {
        return [...this.keys()];
    }
    
    
    
    /**
     * Indique à tous les profiles que la partie commence
     */
    public start(): void {
        this.toArray().forEach((profile) => {
            // profile.start();
        });
    }


    /**
     * Indique à tous les profiles que la partie se termine
     */
    public stop(game: Game): void {
        this.toArray().forEach((profile) => {
            // profile.stop(game);
        });
    }




    /**
     * Envoie un message socket à tous les profils
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer
     */
    public sendSocket<E extends SocketEvents>(event: E, data: PacketManager.DataForPacket<E>): void {
        this.toArray().forEach((profile) => {
            profile.sendSocket(event, data);
        });
    }
}