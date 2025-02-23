import path from "path";
import { fileURLToPath } from 'url';
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";


/**
 * Création d'une base de donnée locale
 * 
 * Elle permet de stocké des informations légères et nécessaires qui peuvent être 
 * modifié à tout moment
 */



type LocalDatabase = {};
const defaultDatabase: LocalDatabase = {};



const dataFilePath: string = path.join(path.dirname(fileURLToPath(import.meta.url)), './data.json');
const adapterDatabase: JSONFile<LocalDatabase> = new JSONFile<LocalDatabase>(dataFilePath);
const local_database: Low<LocalDatabase> = new Low(adapterDatabase, defaultDatabase);
await local_database.read();

export default local_database;