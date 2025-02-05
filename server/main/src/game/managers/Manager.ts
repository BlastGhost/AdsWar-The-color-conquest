/**
 * Représente un manager
 */
export default class Manager<T> extends Map<string, T>  {
    /**
     * Converti le Manager en Tableau
     * @returns Le tableau des valeurs
     */
    public toArray(): T[] {
        return [...this.values()];
    }



    /**
     * Regarde si le Manager est vide
     * @returns true si le Map est vide, false sinon
     */
    public isEmpty(): boolean {
        return this.size <= 0;
    }
}