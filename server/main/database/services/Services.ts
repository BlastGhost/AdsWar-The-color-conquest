import mongoose, { FilterQuery, ProjectionType, UpdateQuery } from "mongoose";



/**
 * Les services commun à toutes les collections qui seront traités
 */
export default abstract class Services<Data> {
    private collection: mongoose.Model<Data>;
    protected name: string;
    protected pluralName: string;




    constructor(collection: mongoose.Model<Data>, name: string, pluralName: string) {
        this.collection = collection;
        this.name = name;
        this.pluralName = pluralName;
    }



    /**
     * Ajoute un nouvel élément à la collection
     * @param value La valeur à ajouter
     */
    public async add(value: Data) {
        return new Promise<void>((resolve, reject) => {
            this.collection
                .create(value)
                .then((value) => {
                    console.log(`[MongoDB] ${this.name} Services : ${this.name} created (${value.id})`);
                    // console.log(value);
                    return resolve();
                })
                .catch((reason) => {
                    console.error(`[MongoDB] ${this.name} Services Error : Error while creating new ${this.name.toLowerCase()}`);
                    console.error(reason);
                    return reject();
                });
        });
    }



    /**
     * Récupère tous les éléments en fonctions du filtre et projeté
     * @param filter Le filtre
     * @param projection La projection
     * @returns Tous les éléments correspondants
     */
    public async getAll(filter?: FilterQuery<Data>, projection?: ProjectionType<Data>): Promise<Data[]> {
        filter ??= {};
        return new Promise((resolve, reject) => {
            this.collection
                .find(filter, projection)
                .then((datas: Data[]) => {
                    // console.log(`[MongoDB] ${this.name} Services : Get All ${this.pluralName}`, datas);
                    return resolve(datas);
                })
                .catch((reason) => {
                    console.error(`[MongoDB] ${this.name} Services Error : Error while getting all ${this.pluralName}`);
                    console.error(reason);
                    return reject();
                });
        });
    }



    /**
     * Récupère un élément
     * @param filter Le filtre
     * @param projection La projection
     * @returns L'élément
     */
    public async getOne(filter?: FilterQuery<Data>, projection?: ProjectionType<Data>): Promise<Data> {
        return new Promise<Data>((resolve, reject) => {
            this.collection
                .findOne(filter, projection)
                .then((data: any) => {
                    // console.log(`[MongoDB] ${this.name} Services : Get ${this.name} (${data.id})`, data);
                    return resolve(data);
                })
                .catch((reason) => {
                    console.error(`[MongoDB] ${this.name} Services Error : Error while getting one ${this.name.toLowerCase()}`);
                    console.error(reason);
                    return reject();
                });
        })
    }



    /**
     * Met à jour les attributs d'un élément donné
     * @param id L'ID de l'élément à mettre à jour
     * @param update Les attributs à mettre à jour
     */
    public async edit(id: string, update: UpdateQuery<Data>): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.collection
                .findOneAndUpdate(
                    { id },
                    update,
                )
                .then((data: any) => {
                    // console.log(`[MongoDB] ${this.name} Services : Edit ${this.name} (${data.id})`, data);
                    return resolve();
                })
                .catch((reason) => {
                    console.error(`[MongoDB] ${this.name} Services Error : Error while updating ${this.name.toLowerCase()} (${id})`);
                    console.error(reason);
                    return reject();
                })
        })
    }


    /**
     * Met à jour l'entièreté d'un élément
     * @param id L'ID de l'élément à mettre à jour
     * @param newData Les nouvelles données de l'élément
     */
    public async update(id: string, newData: Data): Promise<void> {
        this.edit(id, { $set: newData as any });
    }



    /**
     * Supprime plusieurs éléments 
     * @param ids Les IDs des éléments à supprimer
     */
    public async deleteMany(ids: string[]): Promise<void> {
        if (ids.length <= 0) return;
        else return new Promise<void>((resolve, reject) => {
            this.collection
                .deleteMany({ id: { $in: ids } })
                .then(() => {
                    console.log(`[MongoDB] ${this.name} Services : ${this.name} deleted (${ids})`);
                    return resolve();
                })
                .catch((reason) => {
                    console.error(`[MongoDB] ${this.name} Services Error : Error while deleting ${this.name.toLowerCase()} (${ids})`);
                    console.error(reason);
                    return reject();
                });
        });
    }


    /**
     * Supprime un élément
     * @param id L'ID de l'élément à supprimer
     */
    public async deleteOne(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.collection
                .deleteOne({ id })
                .then(() => {
                    console.log(`[MongoDB] ${this.name} Services : ${this.name} deleted (${id})`);
                    return resolve();
                })
                .catch((reason) => {
                    console.error(`[MongoDB] ${this.name} Services Error : Error while deleting ${this.name.toLowerCase()} (${id})`);
                    console.error(reason);
                    return reject();
                });
        });
    }


}
