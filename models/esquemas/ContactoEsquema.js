import mongoose from "mongoose";

// ! Creamos esquema (La descripción de como va a ser nuestro documento)

const ContactoEsquema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    apellido: String,
    email: String,
    nroPedido: Number,
    areaConsulta: String,
    razonConsulta: String,
  },
  {
    timestamps: true, // createAt / updateAt
    versionKey: false,
  }
);

export default ContactoEsquema;
