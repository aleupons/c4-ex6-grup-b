const morgan = require("morgan");
const express = require("express");
const app = require("./init");
const rutasAnimales = require("./rutas/animales");

app.use(morgan("dev"));
app.use(express.json());

app.use("/alumnos", rutasAnimales);
