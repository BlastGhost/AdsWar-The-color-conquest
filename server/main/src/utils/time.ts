/**
 * 
 */
export namespace Time {
    /**
     * 
     * @returns 
     */
    export function timestamp(): number {
        return new Date().getTime();
    }


    const second: number = 1_000;
    const minute: number = second * 60;
    const hour: number = minute * 60;
    const day: number = hour * 24;
    const week: number = day * 7;

    export const values = {
        second,
        minute,
        hour,
        day,
        week,
    };
}