const inquirer = require("inquirer");
const chalk = require("chalk");
const { Animal } = require("../../schemas/Animal");
const { Duenyo } = require("../../schemas/Duenyo");
const { Especie } = require("../../schemas/Especie");

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

const listarEspecieAnimales = async (id, nombreEspecie) => {
  try {
    const animales = await Animal.findAll({
      include: {
        model: Especie,
        required: true,
      },
      where: { duenyo: id },
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

const adoptarAnimal = async (opcion, duenyoId) => {
  try {
    const orfes = await Animal.findAll({
      where: {
        duenyo: null,
      },
    });
    if (orfes) {
      inquirer
        .prompt([
          {
            name: "animalParaAdoptar",
            message: "¿Qué animal desearia adoptar?",
            type: "list",
            choices: orfes.map((orfe) => ({
              value: orfe.chip,
              name: orfe.nombre,
            })),
            when: () => opcion === "adoptarUnAnimal",
          },
        ])
        .then((response) =>
          Animal.update(
            {
              duenyo: duenyoId,
            },
            {
              where: {
                chip: response.animalParaAdoptar,
              },
            }
          )
        );
    } else {
      console.log("No hay animales huerfanos, todo el mundo esta feliz");
    }
  } catch (err) {
    console.log("No hay huerfanos");
    console.log(err.message);
  }
};

const cambiarNombre = async (id, nuevoNombre) => {
  try {
    const duenyo = await Duenyo.findOne({
      where: { id },
    });
    const modificarNombre = await Duenyo.update(
      {
        nombre: nuevoNombre,
      },
      {
        where: {
          nombre: duenyo.nombre,
        },
      }
    );
  } catch (error) {
    console.log("No tenemos ningún dueño con este DNI");
  }
};

module.exports = {
  listarAnimales,
  listarEspecieAnimales,
  mostrarDatosAnimal,
  cambiarNombre,
  adoptarAnimal,
};
