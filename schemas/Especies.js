const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const { Animal } = require("./Animal");

const Especies = sequelize.define(
  "Especies",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "animales",
    timestamps: false,
  }
);

Animal.hasMany(Especies, { foreignKey: "animal" });
Especies.belongsTo(Animal, { foreignKey: "especies" });

module.exports = Especies;
