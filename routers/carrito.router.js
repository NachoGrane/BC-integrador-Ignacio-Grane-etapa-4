import express from "express";
const routerCarritos = express.Router();

import controladoresCarrito from "../controllers/carritos.controllers.js";

routerCarritos.post("/", controladoresCarrito.guardarCarrito);
routerCarritos.delete("/", controladoresCarrito.deleteCarrito);

export default routerCarritos;
