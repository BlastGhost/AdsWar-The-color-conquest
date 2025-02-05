/** Les états du profileF */
export const PROFILE_STATE = {
    /** Le profile est en attente */
    WAITING: 0,
    /** Le profile est dans un lobby */
    IN_LOBBY: 1,
    /** Le profile est en partie */
    IN_GAME: 2,
} as const;

/** */
export type ProfileState = (typeof PROFILE_STATE)[keyof typeof PROFILE_STATE];