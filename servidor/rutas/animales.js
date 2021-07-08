const express = require("express");
const {
  listarTodosAnimales,
  getAnimal,
} = require("../../bd/consultas/consultasAnimales");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const animales = await listarTodosAnimales();
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

module.exports = router;
