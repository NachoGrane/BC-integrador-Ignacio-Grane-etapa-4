import mongoose from "mongoose";
import ProductosEsquema from "./esquemas/ProductosEsquema.js";

// ! MODELO MONGOOSE
const ProductosModelo = mongoose.model("productos", ProductosEsquema);

const obtenerTodos = async () => {
  try {
    const productos = await ProductosModelo.find();
    //console.log(productos);
    return productos;
  } catch (error) {
    console.log("[obtenerTodos]", error);
  }
};

const obtenerUnProducto = async (id) => {
  try {
    // https://mongoosejs.com/docs/queries.html
    //const producto = await ProductosModelo.find({ _id: id})

    const producto = await ProductosModelo.findById(id);
    console.log(producto);
    return producto;
  } catch (error) {
    console.log("[obtenerUnProducto]", error);
  }
};

const crearProducto = async (producto) => {
  try {
    // ? Primera forma
    //const docMongooseProducto = new ProductosModelo(producto)
    //const productoCreado = await docMongooseProducto.save() // Guardo en la DB
    //console.log(productoCreado) // { _id, ...producto }
    // ? Segunda forma
    const productoCreado = await ProductosModelo.create(producto);
    //console.log(productoCreado)
    return productoCreado;
  } catch (error) {
    // console.log("[crearProducto]", error);
    throw error;
  }
};

const updateProducto = async (id, productoEditado) => {
  try {
    const options = {
      new: true,
    };
    const productoYaEditado = await ProductosModelo.findByIdAndUpdate(
      id,
      productoEditado,
      options
    );
    console.log(productoYaEditado);
    return productoYaEditado;
  } catch (error) {
    throw error;
  }
};

const deleteProducto = async (id) => {
  try {
    //const productoBorrado = await ProductosModelo.deleteOne({ _id: id })
    const productoBorrado = await ProductosModelo.findByIdAndDelete(id);
    //console.log(productoBorrado)
    return productoBorrado;
  } catch (error) {
    console.log("[deleteProducto]", error);
  }
};

const buscar = async (nombre) => {
  try {
    const newRegex = new RegExp(nombre, "i");
    const productos = await ProductosModelo.find({
      nombre: newRegex,
    });
    return productos;
  } catch (error) {
    console.log("[buscar]", error);
  }
};

export default {
  obtenerTodos,
  obtenerUnProducto,
  crearProducto,
  updateProducto,
  deleteProducto,
  buscar,
};
