const { program } = require("commander");
const inquirer = require("inquirer");
const preguntas = require("./datos/preguntas");

program
  .option("--color <color>", "Eligue un color")
  .option("--abrev", "Quieres las lineas abreviadas?");
program.parse();
const opciones = program.opts();
console.log(opciones);
inquirer.prompt(preguntas).then((response) => console.log(response));
