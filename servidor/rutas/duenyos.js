const express = require("express");
const {
  getAnimal,
  listarDuenyos,
  listarDuenyo,
  crearDuenyo,
  modificarDuenyo,
  borrarDuenyo,
} = require("../../bd/consultas/apiDuenyos");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const duenyos = await listarDuenyos();
  res.json(duenyos);
});

router.get("/:dni", async (req, res, next) => {
  const { dni } = req.params;
  const duenyos = await listarDuenyo(dni);
  res.json(duenyos);
});

router.post("/", async (req, res, next) => {
  const duenyo = req.body;
  if (!duenyo.nombre) {
    const nuevoError = new Error("El duenyo no se ha enviado correctamente");
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  const nuevoDuenyo = await crearDuenyo(duenyo);
  res.status(200).json(nuevoDuenyo);
});

router.put("/:dni", async (req, res, next) => {
  const { nombre, edad } = req.body;
  const { dni } = req.params;
  const duenyo = await listarDuenyo(dni);
  if (!duenyo) {
    const nuevoError = new Error(`No existe el duenyo con dni ${dni}`);
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  const duenyoModificado = await modificarDuenyo(nombre, edad, dni);
  res.status(200).json(duenyoModificado);
});

router.delete("/:dni", async (req, res, next) => {
  const { dni } = req.params;
  const duenyo = await listarDuenyo(dni);
  if (!duenyo) {
    const nuevoError = new Error(`No existe el duenyo con dni ${dni}`);
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  const duenyoBorrado = await borrarDuenyo(dni);
  if (duenyoBorrado === 1) {
    res.json(duenyo);
  } else {
    const nuevoError = new Error("No se ha podido borrar el dueño");
    nuevoError.codigo = 500;
    next(nuevoError);
  }
});

module.exports = router;
