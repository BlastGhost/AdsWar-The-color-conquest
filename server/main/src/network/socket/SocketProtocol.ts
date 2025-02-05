import { Server, Socket } from "socket.io";
import http from "http";
import SocketHandler from "./SocketHandler.js";
import Profile from "../../game/profile/Profile.js";
import { GameServer } from "../../game/GameServer.js";
import { PacketManager } from "../packets/PacketManager.js";
import { SOCKET_EVENTS, SocketEvents } from "./SocketEvents.js";
import Group from "../../game/world/player/Group.js";



/**
 * 
 */
export namespace SocketProtocol {
    /** L'instance du serveur socket */
    export let io: Server;





    /**
     * Démarre le serveur socket
     * @param server Le serveur HTTP
     * @param port Le port sur lequel écoute le serveur socket
     */
    export function start(server: http.Server, port: number): void {
        console.log(`[Socket] starting...`);

        io = new Server(server, { transports: ["websocket"] });

        console.log(`[Socket] listening on port ${port}`);


        // Lorsque l'on détecte une nouvelle connection socket 
        io.on(`connection`, (socket: Socket) => {
            console.log(`[Socket] New Connection : ${socket.id}`);
            const query = socket.handshake.query;


        });
    }





    /**
     * Envoie un message socket à un profile en utilisant l'instance du Profile
     * @param profile L'instance du profile auquel le message sera envoyé
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer si il y en a
     */
    export function sendTo<E extends SocketEvents>(profile: Profile, event: E, data: PacketManager.DataForPacket<E>): void;
    /**
     * Envoie un message socket à un profile en utilisant l'ID du Profile
     * @param profileId L'ID du profile auquel le message sera envoyé
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer si il y en a
     */
    export function sendTo<E extends SocketEvents>(profileId: string, event: E, data: PacketManager.DataForPacket<E>): void;
    export function sendTo<E extends SocketEvents>(profileOrId: Profile | string, event: E, data: PacketManager.DataForPacket<E>): void {
        // Gestion avec l'ID du profile
        if (typeof profileOrId === "string") {
            const profile = GameServer.getProfile(profileOrId);
            sendTo(profile, event, data);
        }
        // Gestion avec l'instance du profile
        else {
            profileOrId.sendSocket(event, data);
        }
    }



    /**
     * Envoie un message socket à tous les joueurs d'un groupe en utilisant l'instance du groupe
     * @param group L'instance du groupe auquel le message sera envoyé
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer si il y en a
     */
    export function sendToGroup<E extends SocketEvents>(group: Group, event: E, data: PacketManager.DataForPacket<E>): void;
    /**
     * Envoie un message socket à tous les joueurs d'un groupe en utilisant l'ID du groupe
     * @param groupId L'ID du groupe auquel le message sera envoyé
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer si il y en a
     */
    export function sendToGroup<E extends SocketEvents>(groupId: string, event: E, data: PacketManager.DataForPacket<E>): void;
    export function sendToGroup<E extends SocketEvents>(groupOrId: Group | string, event: E, data: PacketManager.DataForPacket<E>): void {
        // Gestion avec l'ID du group
        if (typeof groupOrId === "string") {
            const group = GameServer.getGroupById(groupOrId);
            if (group)
                sendToGroup(group, event, data);
        }
        // Gestion avec l'instance du lobby
        else {
            // groupOrId.sendSocketToProfiles(event, data);
        }
    }





    /**
     * Envoie un message socket à tous les profiles connectés
     * @param event L'évènement à envoyer
     * @param data Les données à envoyer si il y en a
     */
    export function sendToAll<E extends SocketEvents>(event: E, data: PacketManager.DataForPacket<E>): void {
        GameServer.sendSocketToAll(event, data);
    }



}