import Services from './Services.js';
import { PlayerData } from '../schemas/player_schema.js';
import { models } from 'mongoose';



export class PlayerServices extends Services<PlayerData> {
    constructor() {
        super(models.Player, "Player", "players");
    }
}



const player_services = new PlayerServices();

export default player_services;