const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const { Duenyo } = require("./Duenyo");
const { Especie } = require("./Especie");

const Animal = sequelize.define(
  "Animal",
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
    chip: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    especie: {
      type: DataTypes.INTEGER,
    },
    duenyo: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "animales",
    timestamps: false,
  }
);

Animal.belongsTo(Duenyo, { foreignKey: "duenyo" });
Duenyo.hasMany(Animal, { foreignKey: "duenyo" });
Animal.belongsTo(Especie, { foreignKey: "especie" });
Especie.hasMany(Animal, { foreignKey: "especie" });

module.exports = Animal;
