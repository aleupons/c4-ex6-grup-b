const { DataTypes } = require("sequelize");
const sequelize = require("../bd/conexion");

const Duenyo = sequelize.define(
  "Duenyo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      validate: {
        max: 120,
        min: 0,
      },
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(9),
      unique: true,
    },
  },
  {
    tableName: "duenyos",
    timestamps: false,
  }
);

const dniEnbd = async (dniEscrito) => {
  const duenyo = await Duenyo.findOne({ where: { dni: dniEscrito } });
  if (duenyo === null) {
    console.log("Not found!");
    return false;
  } else {
    console.log(duenyo instanceof Duenyo);
    console.log(duenyo.dni);
  }
  return true;
};

module.exports = {
  dniEnbd,
  Duenyo,
};
