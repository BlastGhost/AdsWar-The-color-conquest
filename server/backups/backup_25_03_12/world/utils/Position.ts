export default class Position {
    private _x: number;
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    private _y: number;
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }



    public distanceTo(target: Position): number {
        return Math.sqrt(this.distanceToSquared(target));
    }

    public distanceToSquared(target: Position): number {
        const x: number = this.x - target.x;
        const y: number = this.y - target.y;

        return x * x + y * y;
    }

}