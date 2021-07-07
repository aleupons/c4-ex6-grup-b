const inquirer = require("inquirer");
const Animal = require("./schemas/Animal");

const adoptarAnimal = async (opcion) => {
  try {
    const orfes = await Animal.findAll({
      where: {
        duenyo: null,
      },
    });
    if (orfes) {
      inquirer.prompt([
        {
          name: "animalParaAdoptar",
          message: "¿Qué animal desearia adoptar?",
          type: "list",
          choices: [
            orfes.map((orfe) => ({ value: orfe.chip, name: orfe.nombre })),
          ],
          when: () => opcion === "adoptarUnAnimal",
        },
      ]);
    } else {
      console.log("No hay animales huerfanos, todo el mundo esta feliz");
    }
  } catch (err) {
    console.log("No hay huerfanos");
    console.log(err.message);
  }
};

adoptarAnimal();

module.exports = { adoptarAnimal };
