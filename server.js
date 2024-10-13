import express from "express";
import cors from "cors";
import path from "node:path";

// https://www.npmjs.com/package/dotenv
import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
import getConnection from "./utils/get-connection.js";
import routerCarritos from "./routers/carrito.router.js";
import routerUpload from "./routers/upload.router.js";
import routerContacto from "./routers/contacto.router.js";

// ! Variables/Constantes
const app = express();
const PORT = process.env.PORT || 2222;
const uri_remota = process.env.URI_MONGO;

// ! Middlewares
app.use(express.json()); // Intrepeta el body y lo entiende
app.use(express.static(path.join("public")));
app.use(cors()); // Todos los origenes estan permitidos

// ! Rutas
app.use("/api/v1/productos", routerProductos);
app.use("/api/v1/carritos", routerCarritos);
app.use("/api/v1/uploads", routerUpload);
app.use("/api/v1/contacto", routerContacto);

app.get("/", (req, res) => {
  res.redirect("api/v1/productos/");
});

app.all("*", (req, res) => {
  res.status(404).json({
    ruta: `${req.url}`,
    metodo: `${req.method}`,
    mensaje: "No se puede acceder al recurso que están queriendo acceder",
  });
});

app.listen(PORT, (err) => {
  if (err) throw new Error("No se pudo levantar el servidor", err);
  console.log(`Servidor funcionando en: http://localhost:${PORT}`);
  getConnection(uri_remota);
});
