/**
 * Les options communes à tous les schémas
 */
export default {
    id: false,              // Ignore le système d'ID par défaut
    versionKey: false,      // Ignore la propriété des versions des documents (__v)
    typeKey: '$type',       // Redéfinit la clé pour assigner le type de la valeur
};