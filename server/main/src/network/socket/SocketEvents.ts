/** Les événements sockets envoyé par le serveur */
export const SOCKET_EVENTS = {
    
} as const;

/** */
export type SocketEvents = (typeof SOCKET_EVENTS)[keyof typeof SOCKET_EVENTS];