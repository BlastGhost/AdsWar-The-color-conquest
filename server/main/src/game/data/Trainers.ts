import { Random } from "../../utils/random.js";



/** Les noms des dresseurs disponible côté client */
const trainerNames = [
    "Tcheren", "Artie", "Inezia", "Bardane", "Carolina", "Zhu", "Iris", "Anis", "Pieris", "Rachid", "Aloé",
    "Kunz", "Percila", "Goyah", "Ghetis", "N", "Bianca", "Chamsin", "Chammal",
    "Cynthia", "Noa", "Armando", "Watson", 
];



/**
 * Récupère le nom d'un dresseur au hasard
 * @returns Le nom d'un dresseur
 */
function getRandomName(): string {
    const index: number = Random.randomInteger(0, trainerNames.length - 1);
    return trainerNames[index];
}





export default {
    trainerNames,
    getRandomName,
}