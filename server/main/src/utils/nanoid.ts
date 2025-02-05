import { customAlphabet } from 'nanoid';



/**
 * Regroupe des fonctions en rapport avec NanoId
 */
export namespace NanoId {
    const FULL_ALPHABET: string = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

    const ID_ALPHABET: string = '1234567890abcdefghijklmnopqrstuvwxyz';
    const ID_SIZE: number = 16; 

    const CODE_ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const CODE_SIZE: number = 6; 


    
    

    /**
     * Génère 
     * @param size 
     * @param aplhabet 
     * @param limit 
     * @returns 
     */
    export function generate(size: number, aplhabet: string = FULL_ALPHABET, limit?: number): string {
        return customAlphabet(aplhabet, size)(limit);
    }
    
    
    
    /**
     * 
     * @param limit 
     * @returns 
     */
    export function generateId(limit?: number): string {
        if (limit > ID_SIZE) limit = ID_SIZE;
        return generate(ID_SIZE, ID_ALPHABET, limit);
    }


    
    /**
     * 
     * @param limit 
     * @returns 
     */
    export function generateCode(limit?: number): string {
        if (limit > CODE_SIZE) limit = CODE_SIZE;
        return generate(CODE_SIZE, CODE_ALPHABET, limit);
    }
    
}