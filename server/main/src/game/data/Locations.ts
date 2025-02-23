import GPS from "../world/utils/GPS.js";
import Location from "./Location.js"



export namespace Locations {

    export const WORLD = Location.Builder("World")
        .withStart(-180, -90)
        .withEnd(180, 90)
        .build();

    export const LE_MANS = Location.Builder("Le Mans")
        .withStart(0.16607920419844824, 48.03318003995168)
        .withEnd(0.24867975297581335, 47.978673400760655)
        .build();

}