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
  try {
    const duenyo = await Duenyo.findOne({ where: { dni: dniEscrito } });
    return {
      hayDuenyo: !!duenyo,
      duenyo: duenyo.dataValues,
    };
  } catch (error) {
    console.log("No existe ningún dueño con este DNI");
    return { hayDuenyo: null, duenyo: null };
  }
};

module.exports = {
  dniEnbd,
  Duenyo,
};
