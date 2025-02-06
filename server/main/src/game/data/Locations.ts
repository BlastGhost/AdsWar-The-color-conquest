import GPS from "../world/utils/GPS.js";
import Location from "./Location.js"



export namespace Locations {

    export const LE_MANS = Location.Builder("Le Mans")
        .withStart(0.16607920419844824, 48.03318003995168)
        .withEnd(0.24867975297581335, 47.978673400760655)
        .build();

}