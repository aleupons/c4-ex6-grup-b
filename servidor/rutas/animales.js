const express = require("express");
const {
  getAnimal,
  listarAnimales,
  crearAnimal,
  modificarAnimal,
  borrarAnimal,
} = require("../../bd/consultas/apiAnimales");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const animales = await listarAnimales();
  res.json(animales);
});

router.get("/animal/:id", async (req, res, next) => {
  const { id } = req.params;
  const animal = await getAnimal(id);
  if (!animal) {
    const nuevoError = new Error(`No existe el animal con id ${id}`);
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  res.json(animal);
});

router.post("/animal", async (req, res, next) => {
  const animal = req.body;
  if (!animal.nombre) {
    const nuevoError = new Error("El animal no se ha enviado correctamente");
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  const nuevoAnimal = await crearAnimal(animal);
  res.status(200).json(nuevoAnimal);
});

router.put("/animal/:id", async (req, res, next) => {
  const { nombre, edad, duenyo } = req.body;
  const { id } = req.params;
  const animal = await getAnimal(id);
  if (!animal) {
    const nuevoError = new Error(`No existe el animal con id ${id}`);
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  const animalModificado = await modificarAnimal(nombre, edad, duenyo, id);
  res.status(200).json(animalModificado);
});

router.delete("/animal/:id", async (req, res, next) => {
  const { id } = req.params;
  const animal = await getAnimal(id);
  if (!animal) {
    const nuevoError = new Error(`No existe el animal con id ${id}`);
    nuevoError.codigo = 404;
    return next(nuevoError);
  }
  const animalBorrado = await borrarAnimal(id);
  if (animalBorrado === 1) {
    res.json(animal);
  } else {
    const nuevoError = new Error("No se ha podido borrar el animal");
    nuevoError.codigo = 500;
    next(nuevoError);
  }
});

module.exports = router;
