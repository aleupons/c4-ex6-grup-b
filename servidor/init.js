require("dotenv").config();
const express = require("express");

const app = express();
const puerto = process.env.PUERTO || 4001;

const server = app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

server.on("error", (err) => {
  console.log("No se ha podido levantar el servidor");
  if (err.code === "EADDRINUSE") {
    console.log(`El port ${puerto} está ocupado`);
  }
});

module.exports = app;
