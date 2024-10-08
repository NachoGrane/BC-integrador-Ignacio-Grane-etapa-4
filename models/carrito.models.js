import mongoose from "mongoose";
import CarritosEsquema from "./esquemas/CarritosEsquema.js";

// ! MODELO MONGOOSE
const CarritosModelo = mongoose.model("carritos", CarritosEsquema);

// Servicio
const crearCarrito = async (carrito) => {
  try {
    const carritoCreado = new CarritosModelo({ carrito }); // Tiene que ser un objeto. Estoy fusionando/mapeando lo que me llego con el esquema que declare para la base de datos.
    const carritoGuardado = await carritoCreado.save(); // Escribo el carrito recibido en la base

    return carritoGuardado;
  } catch (error) {
    console.log("[crearCarrito]: No se pudo crear...", error);
  }
};

export default {
  crearCarrito,
};
