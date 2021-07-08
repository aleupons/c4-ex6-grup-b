const morgan = require("morgan");
const express = require("express");
const app = require("./init");
const { error404, errorGeneral } = require("./errores");
const rutasAnimales = require("./rutas/animales");
const rutasDuenyos = require("./rutas/duenyos");

app.use(morgan("dev"));
app.use(express.json());

app.use("/animales", rutasAnimales);
app.use("/duenyos", rutasDuenyos);

app.use(error404);
app.use(errorGeneral);
