import ClientPacket from "./ClientPacket.js";



export default class ClientPlayerPaintPacket extends ClientPacket {
    public targetLongitude: number;
    public targetLatitude: number;
    public color: string;
}