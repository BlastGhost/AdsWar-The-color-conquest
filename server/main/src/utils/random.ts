/**
 * 
 */
export namespace Random {
    /**
     * 
     * @param length 
     * @returns 
     */
    export function generateRandomString(length: number): string {
        let text: string = '';
        const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    }



    /**
     * 
     * @param min 
     * @param max 
     * @returns 
     */
    export function randomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}