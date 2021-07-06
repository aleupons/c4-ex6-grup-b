const Animal = require("./schemas/Animal");
const Especie = require("./schemas/Especie");

const listarAnimales = async () => {
  const animales = await Animal.findAll({
    include: { model: Especie },
    order: [
      ["especie", "DESC"],
      ["nombre", "DESC"],
    ],
  });
  console.log("\nAnimales por nombre y especie:");
  for (const animal of animales) {
    console.log(
      `${animal.nombre} -> Edad: ${animal.edad} Especie: ${animal.Especie.nombre}`
    );
  }
};

listarAnimales();

module.exports = {
  listarAnimales,
};
