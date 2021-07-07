const { DataTypes } = require("sequelize");
const sequelize = require("../bd/conexion");

const Especie = sequelize.define(
  "Especie",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(32),
      unique: true,
    },
  },
  {
    tableName: "especies",
    timestamps: false,
  }
);

module.exports = { Especie };
