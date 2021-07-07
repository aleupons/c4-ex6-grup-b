const Animal = require("./schemas/Animal");
const Especie = require("./schemas/Especie");

const listarAnimales = async (id) => {
  try {
    const animales = await Animal.findAll({
      include: { model: Especie },
      where: { duenyo: id },
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
  } catch (error) {
    console.log("No tenemos animales");
  }
};

module.exports = {
  listarAnimales,
};
