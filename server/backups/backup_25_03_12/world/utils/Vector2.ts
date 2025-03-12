import Position from "./Position.js";



/**
 * Représente un vecteur 2 dimensions
 */
export default class Vector2 extends Position {
    /** Vecteur null */
    public static ZERO = new Vector2(0, 0);



    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
    }





    /**
     * Additionne un vecteur au vecteur actuel
     * @param vector Le vecteur que l'on souhaite additionner
     */
    public add(vector: Vector2): Vector2;
    /**
     * Additionne aux coordonnées du vecteur deux coordonnées
     * @param x La coordonnée x que l'on souhaite additionner
     * @param y La coordonnée y que l'on souhaite additionner
     */
    public add(x: number, y: number): Vector2;
    public add(xOrVec: Vector2 | number, y?: number): Vector2 {
        if (xOrVec instanceof Vector2) {
            return this.add(xOrVec.x, xOrVec.y);
        }
        else {
            return new Vector2(this.x + xOrVec, this.y + y!);
        }
    }


    /**
     * Soustrait un vecteur au vecteur actuel
     * @param vector Le vecteur que l'on souhaite soustraire
     */
    public substract(vector: Vector2): Vector2;
    /**
     * Soustrait aux coordonnées du vecteur deux coordonnées
     * @param x La coordonnée x que l'on souhaite soustraire
     * @param y La coordonnée y que l'on souhaite soustraire
     */
    public substract(x: number, y: number): Vector2;
    public substract(xOrVec: Vector2 | number, y?: number): Vector2 {
        if (xOrVec instanceof Vector2) {
            return this.substract(xOrVec.x, xOrVec.y);
        }
        else {
            return this.add(-xOrVec, -y!);
        }
    }


    /**
     * 
     * @param vector 
     */
    public multiply(vector: Vector2): Vector2;
    /**
     * Multiplie aux coordonnées du vecteur deux coordonnées
     * @param x La coordonnée x que l'on souhaite additionner
     * @param y La coordonnée y que l'on souhaite additionner
     */
    public multiply(x: number, y: number): Vector2;
    public multiply(xOrVec: Vector2 | number, y?: number): Vector2 {
        if (xOrVec instanceof Vector2) {
            return this.multiply(xOrVec.x, xOrVec.y);
        }
        else {
            return new Vector2(this.x * xOrVec, this.y * y!);
        }
    }





    /**
     * Redimensionne le vecteur
     * @param value Le facteur multiplicateur
     * @returns Le vecteur redimensionné
     */
    public scale(value: number): Vector2 {
        return this.multiply(value, value);
    }



    /**
     * @returns Le vecteur inversé
     */
    public reverse(): Vector2 {
        return this.scale(-1.0);
    }



    public floor(): Vector2 {
        return new Vector2(Math.floor(this.x), Math.floor(this.y));
    }





    /**
     * @returns Le vecteur normalisé
     */
    public normalize(): Vector2 {
        const normal: number = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector2(this.x / normal, this.y / normal);
    }





    /**
     * 
     * @param target 
     */
    public angle(target: Vector2): number;
    /**
     * 
     * @param targetX 
     * @param targetY 
     */
    public angle(targetX: number, targetY: number): number;
    public angle(xOrVectarget: number | Vector2, targetY?: number): number {
        if (typeof xOrVectarget === "number") {
            return Vector2.angle(this.x, this.y, xOrVectarget, targetY!);
        }
        else {
            return Vector2.angle(this, xOrVectarget);
        }
    }




    /**
     * Compare deux vecteurs entre eux
     * @param vector Le vecteur que l'on compare
     * @returns true si les vecteurs sont égaux, false sinon
     */
    public equals(vector: Vector2): boolean {
        return this.x === vector.x && this.y === vector.y;
    }





    public copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }


    public toMinimalString(): string {
        return `${this.x}:${this.y}`;
    }

    public toString(): string {
        return JSON.stringify(this);
    }





    /**
     * 
     * @param src 
     * @param target 
     */
    public static angle(src: Vector2, target: Vector2): number;
    /**
     * 
     * @param srcX 
     * @param srcY 
     * @param targetX 
     * @param targetY 
     */
    public static angle(srcX: number, srcY: number, targetX: number, targetY: number): number;
    public static angle(srcXOrVecsrc: number | Vector2, srcYOrVectarget: number | Vector2, targetX?: number, targetY?: number): number {
        if (srcXOrVecsrc instanceof Vector2 && srcYOrVectarget instanceof Vector2) {
            return this.angle(srcXOrVecsrc.x, srcXOrVecsrc.y, srcYOrVectarget.x, srcYOrVectarget.y);
        }
        else {
            const x: number = (srcXOrVecsrc as number) - targetX!;
            const y: number = (srcYOrVectarget as number) - targetY!;

            let angle: number = (Math.atan2(y, x) * (180.0 / Math.PI));

            if (angle < 0.0) {
                angle = this.lerp(angle);
            }

            return angle;
        }
    }



    /**
     * 
     * @param angle 
     * @returns 
     */
    public static lerp(angle: number): number {
        return angle - Math.floor(angle / 360.0) * 360.0;
    }


    public static of(minimalPosition: string): Vector2 {
        const positions = minimalPosition.split(":");
        const x = Number(positions[0]);
        const z = Number(positions[1]);

        return new Vector2(x, z);
    }

}