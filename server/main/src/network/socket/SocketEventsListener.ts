/** Les événements sockets envoyé par le client */
export const SOCKET_EVENTS_LISTENER = {
    /* --------------------------------- Player --------------------------------- */
    PLAYER_CATEGORY: "player>",

    UPDATE_POSITION: "update_position",
    PAINT: "paint",
    
} as const;

export type SocketEventsListener = (typeof SOCKET_EVENTS_LISTENER)[keyof typeof SOCKET_EVENTS_LISTENER];