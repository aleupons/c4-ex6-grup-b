const { Duenyo } = require("./schemas/Duenyo");

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
  cambiarNombre,
};
