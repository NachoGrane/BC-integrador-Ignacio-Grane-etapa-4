import modelosCarritos from "../models/carrito.models.js";

// Llamada al endpoint

// Metodo #1 al que llama el endpoint en POST.
const guardarCarrito = async (req, res) => {
  const productosCarrito = req.body; // el request del carrito que esta en el body de mi request del front.

  try {
    const carritoGuardado = await modelosCarritos.crearCarrito(
      productosCarrito
    );
    res.status(201).json(carritoGuardado); // Es el response del endpoint cuando se hace la petición.
  } catch (error) {
    console.log("No se pudo guardar el carrito", error);
    res.status(500).json({ mensaje: "No se pudo guardar el carrito" });
  }
};

// Metodo #1 al que llama el endpoint DELETE
const deleteCarrito = async (req, res) => {
  console.log("Entre a [deleteCarrito]");
};

export default {
  guardarCarrito,
  deleteCarrito,
};
