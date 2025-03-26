import Vector2 from "../../game/world/utils/Vector2.js";
import Comparable from "../Comparable.js";



export default class Node<T extends Comparable<T>> {
    public data?: T;

    public topLeft?: Node<T>;
    public topRight?: Node<T>;
    public bottomLeft?: Node<T>;
    public bottomRight?: Node<T>;

    public size: Vector2;
    public position: Vector2;



    constructor(size: Vector2, position: Vector2) {
        this.size = size;
        this.position = position;
    }



    public get isLeaf(): boolean {
        return this.isAtomic || this.isEmpty
    }

    public get isAtomic(): boolean {
        return this.size.x === 1 && this.size.y === 1
    }
    
    public get isEmpty(): boolean {
        return !this.topLeft && !this.topRight && !this.bottomLeft && !this.bottomRight;
    }

    public get isFuckingFull(): boolean {
        return !!this.topLeft && !!this.topRight && !!this.bottomLeft && !!this.bottomRight;
    }



    public childrenEquals(): boolean {
        return (this.topLeft?.data?.equals(this.topRight?.data) && this.topLeft?.data?.equals(this.bottomLeft?.data) && this.topLeft?.data?.equals(this.bottomRight?.data)) ?? false;
    }

    public clear(): void {
        this.topLeft = undefined;
        this.topRight = undefined;
        this.bottomLeft = undefined;
        this.bottomRight = undefined;
    }


    public split() {
        if (this.isAtomic) 
            return;

        const size = this.size.scale(0.5);

        this.topLeft = new Node(size, this.position.copy());
        this.topRight = new Node(size, this.position.add(size.x, 0));
        this.bottomLeft = new Node(size, this.position.add(0, size.y));
        this.bottomRight = new Node(size, this.position.add(size));

        this.topLeft.data = this.data;
        this.topRight.data = this.data;
        this.bottomLeft.data = this.data;
        this.bottomRight.data = this.data;
    }
}