import { Socket } from "socket.io";
import { SocketEvents, SOCKET_EVENTS } from "../socket/SocketEvents.js";
import Packet from "./Packet.js";





export namespace PacketManager {

    export type DataForPacket<E extends SocketEvents> = any;





    /**
     * Prépare un packet à envoyer par socket
     * @param event L'évènement socket qui doit être préparé
     * @param data Les données à utiliser pour préparer le packet 
     * @returns Le packet à envoyé
     */
    export function preparePacket<E extends SocketEvents>(event: E, data: DataForPacket<E>): Packet | undefined {
        switch (event) {

            /* --------------------------------- Profile -------------------------------- */



            /* ---------------------------------- Game ---------------------------------- */



            /* --------------------------------- Player --------------------------------- */

        }

        return undefined;
    }



    /**
     * Envoie un message socket au socket donnée
     * @param socket Le socket auquel sera envoyé le message
     * @param event L'évènement du message 
     * @param packet 
     */
    export function send(socket: Socket, event: SocketEvents, packet: Packet): void {
        socket.emit(event, packet);
    }

}