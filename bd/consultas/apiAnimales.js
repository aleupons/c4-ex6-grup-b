const { Animal } = require("../../schemas/Animal");

const listarAnimales = async () => {
  try {
    const animales = await Animal.findAll();
    return animales;
  } catch (error) {
    console.log("No tenemos animales en la base de datos");
    console.log(error.message);
  }
};

const getAnimal = async (id) => {
  try {
    const animal = await Animal.findByPk(id);
    return animal;
  } catch (error) {
    console.log(`No existe el animal con el id ${id}`);
    console.log(error.message);
  }
};

const crearAnimal = async (animal) => {
  try {
    const nuevoAnimal = await Animal.create(animal);
    return nuevoAnimal;
  } catch (error) {
    console.log("No se ha podido crear el animal");
    console.log(error.message);
  }
};

const modificarAnimal = async (nombre, edad, duenyo, id) => {
  try {
    const animalModificado = await Animal.update(
      {
        nombre,
        edad,
        duenyo,
      },
      {
        where: {
          id,
        },
      }
    );
    console.log(animalModificado);
  } catch (error) {
    console.log("No se ha podido modificar el animal");
    console.log(error.message);
  }
};

const borrarAnimal = async (id) => {
  try {
    const animalBorrado = await Animal.destroy({
      where: {
        id,
      },
    });
    return animalBorrado;
  } catch (error) {
    console.log(`No existe el animal con el id ${id}`);
    console.log(error.message);
  }
};

module.exports = {
  getAnimal,
  listarAnimales,
  crearAnimal,
  modificarAnimal,
  borrarAnimal,
};
