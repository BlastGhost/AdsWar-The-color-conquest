import { Socket } from "socket.io";
import { GameServer } from "../../game/GameServer.js";
import { SOCKET_EVENTS, SocketEvents } from "./SocketEvents.js";
import { SOCKET_EVENTS_LISTENER, SocketEventsListener } from "./SocketEventsListener.js";
import Profile from "../../game/profile/Profile.js";
import { PacketManager } from "../packets/PacketManager.js";
import Packet from "../packets/Packet.js";



/**
 * 
 */
export default class SocketEventHandler {
    /** Référence vers l'instance du socket du profile */
    private socket: Socket;
    /** Référence vers le profile qu'on écoute */
    private profile: Profile;



    constructor(socket: Socket, profile: Profile) {
        this.socket = socket;
        this.profile = profile;

        this._startListener();
    }





    /**
     * Envoie un message socket au profile
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer si il y en a
     */
    public send<E extends SocketEvents>(event: E, data: PacketManager.DataForPacket<E>) {
        const packet = PacketManager.preparePacket(event, data);

        if (packet)
            PacketManager.send(this.socket, event, packet);
        // this.socket.emit(event, data)
    }





    private _startListener(): void {
        this.socket.on("disconnect", () => {
            this.deconnection();
        });


        this.socket.onAny((fullEvent: string, ...data: any[]) => {
            const { category, event } = this._decomposeEvent(fullEvent);

            // console.log(`[Socket] ${category}>${event} : ${data[0]}`);
            this.handler(category, event, data[0]);
        });
    }



    /**
     * Lorsque le profile se déconnecte
     */
    private deconnection(): void {
        // const profile: Profile = GameServer.getProfile("")
        this.profile.deconnection();
    }





    /**
     * Décompose l'évènement donné
     * @param fullEvent L'évènement
     * @returns Les parties de l'évènement
     */
    private _decomposeEvent(fullEvent: string) {
        const parts: string[] = fullEvent.split(">");
        const category: string = parts[0];
        const event: string = parts[1];

        return { category, event };
    }



    /**
     * Gestion des évènements reçu
     * @param category La catégorie de l'évènement
     * @param event L'évènement appartenant à la catégorie
     * @param packet Les données à traiter
     */
    private handler(category: string, event: string, packet: Packet): void {
        switch (category) {

            default:
                console.error(`[Socket] Error : Wrong category received : ${category}`);
                break;
        }
    }

}