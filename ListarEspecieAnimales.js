const Especie = require("./schemas/Especie");
const Animal = require("./schemas/Animal");

const listarEspecieAnimales = async (nombreEspecie) => {
  const especies = await Especie.findAll({
    include: {
      model: Animal,
      required: true,
    },
    order: [
      ["especie", "DESC"],
      ["nombre", "DESC"],
    ],
  });
  for (const especie of especies) {
    if (nombreEspecie === especie.nombre) {
      console.log(especie.nombre, especie.Animal.nombre);
    } else {
      console.log(`No tienes animales de la especie ${nombreEspecie}`);
    }
  }
};

listarEspecieAnimales("perro");

module.exports = listarEspecieAnimales;

