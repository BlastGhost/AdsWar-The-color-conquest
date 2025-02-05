import Services from "./Services.js";
import { GroupData } from "../schemas/group_schema.js";
import { models } from "mongoose";



export class GroupServices extends Services<GroupData> {
    constructor() {
        super(models.Group, "Group", "groups");
    }
}



const group_services = new GroupServices();

export default group_services;