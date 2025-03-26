import Comparable from "../../../utils/Comparable.js";

export default class Color implements Comparable<Color> {
    public hex: string;



    constructor(hex: string) {
        this.hex = hex;
    }



 
    public equals(other?: Color | undefined): boolean {
        if (!other)
            return false;

        return this.hex === other.hex;
    }
    
}


