import mongoose from "mongoose";

// ! Creamos esquema (La descripción de como va a ser nuestro documento)

const ProductosEsquema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      unique: true,
    },
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean,
  },
  {
    timestamps: true, // createAt / updateAt
    versionKey: false,
  }
);

export default ProductosEsquema;
