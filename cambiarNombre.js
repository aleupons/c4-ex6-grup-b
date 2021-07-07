const { Duenyo } = require("./schemas/Duenyo");

const cambiarNombre = async (dni, nuevoNombre) => {
  const duenyo = await Duenyo.findOne({
    where: { dni },
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
};

module.exports = {
  cambiarNombre,
};
