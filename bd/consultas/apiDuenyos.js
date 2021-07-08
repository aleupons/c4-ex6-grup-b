const { Duenyo } = require("../../schemas/Duenyo");

const listarDuenyos = async () => {
  try {
    const duenyos = await Duenyo.findAll();
    return duenyos;
  } catch (error) {
    console.log("No tenemos duenyos en la base de datos");
    console.log(error.message);
  }
};
const listarDuenyo = async (dniRecibido) => {
  try {
    const duenyo = await Duenyo.findOne({ where: { dni: dniRecibido } });
    return duenyo;
  } catch (error) {
    console.log("Este duenyo no esta registrado en la base de datos");
    console.log(error.message);
  }
};

const crearDuenyo = async (duenyo) => {
  try {
    const nuevoDuenyo = await Duenyo.create(duenyo);
    return nuevoDuenyo;
  } catch (error) {
    console.log("No se ha podido crear el animal");
    console.log(error.message);
  }
};

const modificarDuenyo = async (nombre, edad, dni) => {
  try {
    const duenyoModificado = await Duenyo.update(
      {
        nombre,
        edad,
      },
      {
        where: {
          dni,
        },
      }
    );
    console.log(duenyoModificado);
  } catch (error) {
    console.log("No se ha podido modificar el dueño");
    console.log(error.message);
  }
};

const borrarDuenyo = async (dni) => {
  try {
    const animalBorrado = await Duenyo.destroy({
      where: {
        dni,
      },
    });
    return animalBorrado;
  } catch (error) {
    console.log(`No existe el dueño con el dni ${dni}`);
    console.log(error.message);
  }
};

module.exports = {
  listarDuenyos,
  listarDuenyo,
  crearDuenyo,
  modificarDuenyo,
  borrarDuenyo,
};
