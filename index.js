const inquirer = require("inquirer");
const { preguntas } = require("./datos/preguntas");
const { listarAnimales } = require("./listarAnimales");
const { listarEspecieAnimales } = require("./ListarEspecieAnimales");
const { mostrarDatosAnimal } = require("./mostrarDatosAnimal");

inquirer.prompt(preguntas).then((response) => {
  console.log(response); // Per veure forma de l'objecte respostes
  if (response.opcion === "todosLosAnimales") {
    listarAnimales();
  } else if (response.opcion === "todosAnimalesEspecie") {
    listarEspecieAnimales(response.especie);
  } else if (response.opcion === "datosUnAnimal") {
    mostrarDatosAnimal(response.chipAnimal);
  }
});
