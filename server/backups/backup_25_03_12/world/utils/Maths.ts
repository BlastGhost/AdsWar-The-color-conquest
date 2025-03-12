export namespace Maths {
    export function degreeToGrad(degree: number): number {
        return degree * Math.PI / 180;
    }

    export function gradToDegree(grad: number): number {
        return grad * 180 / Math.PI;
    }
}