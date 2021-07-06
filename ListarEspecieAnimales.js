const Especie = require("./schemas/Especie");
const Animal = require("./schemas/Animal");

const listarEspecieAnimales = async (nombreEspecie) => {
  const animales = await Animal.findAll({
    include: {
      model: Especie,
      required: true,
    },
    order: [
      ["especie", "DESC"],
      ["nombre", "DESC"],
    ],
  });
  console.log(`Animales de la especie ${nombreEspecie}:`);
  for (const animal of animales) {
    if (nombreEspecie.toLowerCase() === animal.Especie.nombre.toLowerCase()) {
      console.log(animal.nombre);
    }
  }
};

module.exports = { listarEspecieAnimales };
