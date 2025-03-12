import { Router } from "express";



const gameGroupRoutes = Router();





gameGroupRoutes.post("/", async (request, response, next) => {
    // The groups
    
    return response.status(200).json();
});



gameGroupRoutes.post("/:name", async (request, response, next) => {
    // One group

    return response.status(200).json();
});





export default gameGroupRoutes;