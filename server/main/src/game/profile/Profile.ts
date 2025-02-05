import { PacketManager } from "../../network/packets/PacketManager.js";
import { SOCKET_EVENTS, SocketEvents } from "../../network/socket/SocketEvents.js";
import SocketEventHandler from "../../network/socket/SocketHandler.js";
import { NanoId } from "../../utils/nanoid.js";
import Game from "../Game.js";
import { GameServer } from "../GameServer.js";
import Trainers from "../data/Trainers.js";
import { PROFILE_STATE, ProfileState } from "./ProfileState.js";



/**
 * Représente une connection entre un utilisateur et le serveur
 */
export default class Profile {
    /** L'ID du profile */
    public id: string;
    /** Le nom du profile */
    public username: string;
    /** L'image du profile */
    public image: string;
    

    public connection: {
        socketHandler?: SocketEventHandler;
    };





    constructor(id?: string, username?: string) {
        if (!id) this.id = NanoId.generateId();
        else this.id = id;

        if (!username) this.username = Trainers.getRandomName();
        else this.username = username;

        this.connection = {
            socketHandler: undefined,
        };
    }



    /**
     * Lorsque que le profile se déconnecte
     */
    public deconnection(): void {

    }




    /**
     * Envoie un message socket au profile
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer
     */
    public sendSocket<E extends SocketEvents>(event: E, data?: PacketManager.DataForPacket<E>): void {
        this.connection.socketHandler?.send(event, data);
    }
}