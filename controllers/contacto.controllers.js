import modelos from "../models/contacto.models.js";
import handleMongoId from "../utils/handle-mongo-id.js";

const getAll = async (req, res) => {
  try {
    const formContacto = await modelos.obtenerTodos();
    res.json(handleMongoId(formContacto));
  } catch (error) {
    console.log("[getAll]", error);
  }
};

const create = async (req, res) => {
  const formContacto = req.body;

  try {
    console.log("[createContacto BACK] ", formContacto);
    const formCreado = await modelos.crearForm(formContacto);
    res.status(201).json(handleMongoId(formCreado));
  } catch (error) {
    console.log("[create]", error);
    res.status(500).json(error);
  }
};

export default {
  getAll,
  create,
};
