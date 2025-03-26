export default interface Comparable<T> {
    equals(other?: T): boolean;
}