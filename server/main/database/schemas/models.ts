import mongoose from "mongoose";
import PlayerSchema from "./player_schema.js";
import GroupSchema from "./group_schema.js";




export default {
    Players: mongoose.model("Player", PlayerSchema),
    Groups: mongoose.model("Group", GroupSchema),
}