import { Router } from "express";



const gameShopRoutes = Router();





gameShopRoutes.post("/", async (request, response, next) => {
    // The products
    
    return response.status(200).json();    
});



gameShopRoutes.post("/:name", async (request, response, next) => {
    // The selected product
    return response.status(200).json();
});





export default gameShopRoutes;