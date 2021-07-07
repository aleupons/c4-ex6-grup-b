const Especie = require("./schemas/Especie");
const Animal = require("./schemas/Animal");

const listarEspecieAnimales = async (nombreEspecie) => {
  try {
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
    console.log(`\nAnimales de la especie ${nombreEspecie}:`);
    let comptador = 0;
    for (const animal of animales) {
      if (nombreEspecie.toLowerCase() === animal.Especie.nombre.toLowerCase()) {
        console.log(animal.nombre);
        comptador++;
      }
    }
    if (!comptador) {
      console.log(`No tienes animales de la especie ${nombreEspecie}`);
    }
  } catch (error) {
    console.log("No tenemos especies de animales");
  }
};

module.exports = { listarEspecieAnimales };
