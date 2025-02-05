/** Les types des items */
export const ITEM_TYPE = {
    NORMAL: "NORMAL",
} as const;

export type ItemType = (typeof ITEM_TYPE)[keyof typeof ITEM_TYPE];