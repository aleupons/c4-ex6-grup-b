const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const { Duenyo } = require("./Duenyo");

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
    especie: {
      type: DataTypes.STRING(60),
    },
    chip: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  },
  {
    tableName: "animales",
    timestamps: false,
  }
);

Animal.belongsTo(Duenyo, { foreignKey: "animal" });
Duenyo.hasMany(Animal, { foreignKey: "duenyo" });

module.exports = Animal;
