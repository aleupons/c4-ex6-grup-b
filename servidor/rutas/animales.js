const express = require("express");
const { listarTodosAnimales } = require("../../bd/consultas/consultasAnimales");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const animales = await listarTodosAnimales();
  console.log(animales);
  res.json(animales);
});

module.exports = router;
