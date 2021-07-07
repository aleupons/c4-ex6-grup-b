const chalk = require("chalk");
const Animal = require("./schemas/Animal");

const mostrarDatosAnimal = async (idDuenyo, nChip) => {
  try {
    const animal = await Animal.findOne({
      where: {
        chip: nChip,
        duenyo: idDuenyo,
      },
    });
    const {
      dataValues: { id, nombre, edad, chip },
    } = animal;
    console.log(
      chalk.yellow(
        `El animal con el chip ${chip} y el id ${id} se llama ${nombre} y tiene ${edad} años.`
      )
    );
  } catch (err) {
    console.log(`No se ha encontrado el animal con el chip ${nChip}`);
  }
};

module.exports = { mostrarDatosAnimal };
