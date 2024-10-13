import express from "express";
const routerContacto = express.Router();
import controladores from "../controllers/contacto.controllers.js";

// ! POST (CREATE) -> Request de creacion de un producto
routerContacto.post("/", controladores.create);
routerContacto.get("/", controladores.getAll);

export default routerContacto;
