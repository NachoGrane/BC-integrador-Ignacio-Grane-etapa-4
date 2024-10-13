import modelos from "../models/productos.models.js";
import handleMongoId from "../utils/handle-mongo-id.js";

const getAll = async (req, res) => {
  try {
    const productos = await modelos.obtenerTodos();
    res.json(handleMongoId(productos));
  } catch (error) {
    console.log("[getAll]", error);
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;

  try {
    const producto = await modelos.obtenerUnProducto(id);
    res.json(handleMongoId(producto));
  } catch (error) {
    console.log("[getOne]", error);
  }
};

const create = async (req, res) => {
  const producto = req.body;

  try {
    console.log("[createProduct BACK] ", producto);
    const productoCreado = await modelos.crearProducto(producto);
    res.status(201).json(handleMongoId(productoCreado));
  } catch (error) {
    console.log("[create]", error);
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const productoEditado = req.body;

  try {
    const produtoActualizado = await modelos.updateProducto(
      id,
      productoEditado
    );
    res.json(handleMongoId(produtoActualizado));
    res.send("Ok -> PUT (UPDATE)");
  } catch (error) {
    console.log("[update]", error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const productoBorrado = await modelos.deleteProducto(id);
    console.log(productoBorrado);
    res.json(handleMongoId(productoBorrado));
  } catch (error) {
    console.log("[error]", error);
  }
};

const search = async (req, res) => {
  console.log("[SOY SEARCH REQ.PARAMS]", req.query);
  const nombre = req.query.name;

  try {
    const productos = await modelos.buscar(nombre);
    res.json(handleMongoId(productos));
  } catch (error) {
    console.log("[search]", error);
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
  search,
};
