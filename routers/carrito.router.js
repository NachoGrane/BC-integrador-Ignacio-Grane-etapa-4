import express from "express";
const routerCarritos = express.Router();

import controladoresCarrito from "../controllers/carritos.controllers.js";

routerCarritos.post("/", controladoresCarrito.guardarCarrito);

export default routerCarritos;
