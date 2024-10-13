import mongoose from "mongoose";
import ContactoEsquema from "./esquemas/ContactoEsquema.js";

// ! MODELO MONGOOSE
const ContactoModelo = mongoose.model("Contacto", ContactoEsquema);

const obtenerTodos = async () => {
  try {
    const formCreado = await ContactoModelo.find();
    //console.log(productos);
    return formCreado;
  } catch (error) {
    console.log("[obtenerTodos]", error);
  }
};

const crearForm = async (formContacto) => {
  try {
    const formCreado = await ContactoModelo.create(formContacto);
    return formCreado;
  } catch (error) {
    throw error;
  }
};

export default {
  obtenerTodos,
  crearForm,
};
