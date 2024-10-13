import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

// https://www.npmjs.com/package/dotenv
import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
import getConnection from "./utils/get-connection.js";
import routerCarritos from "./routers/carrito.router.js";

// ! Variables/Constantes
const app = express();
const PORT = process.env.PORT || 2222;
const uri_remota = process.env.URI_MONGO;

// ! Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4();
    const extension = file.mimetype.split("/");
    const nombreArchivo = uniqueSuffix + "." + extension[1];
    cb(null, nombreArchivo);
  },
});

// ! Middlewares
app.use(express.json()); // Intrepeta el body y lo entiende
app.use(express.static("./public"));
app.use(cors()); // Todos los origenes estan permitidos

// ? Middleware a nivel de ruta de multer
const upload = multer({ storage: storage });

app.post("/api/v1/uploads", upload.single("foto"), (req, res) => {
  // http://localhost:8080/upload

  const file = req.file;

  const urlCompleta = `${req.protocol}://${req.get("host")}/uploads/${
    file.filename
  }`;
  console.log(urlCompleta);

  res.json({ foto: urlCompleta }); // Me devuelve el nombre del archivo que generó y guardo el back
});

// ! Rutas
app.use("/api/v1/productos", routerProductos);
app.use("/api/v1/carritos", routerCarritos);

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
