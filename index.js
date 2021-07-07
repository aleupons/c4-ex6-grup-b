const inquirer = require("inquirer");
const { preguntasDni, preguntas } = require("./datos/preguntas");
const { listarAnimales } = require("./listarAnimales");
const { listarEspecieAnimales } = require("./ListarEspecieAnimales");
const { mostrarDatosAnimal } = require("./mostrarDatosAnimal");
const { dniEnbd } = require("./schemas/Duenyo");
const { cambiarNombre } = require("./cambiarNombre");
const { adoptarAnimal } = require("./adoptarAnimal");

inquirer.prompt(preguntasDni).then(async (response) => {
  const { hayDuenyo, duenyo } = await dniEnbd(response.dni);
  if (hayDuenyo) {
    inquirer.prompt(preguntas).then(async (response) => {
      console.log(response); // Per veure forma de l'objecte respostes
      if (response.opcion === "todosLosAnimales") {
        listarAnimales(duenyo.id);
      } else if (response.opcion === "todosAnimalesEspecie") {
        listarEspecieAnimales(duenyo.id, response.especie);
      } else if (response.opcion === "datosUnAnimal") {
        mostrarDatosAnimal(duenyo.id, response.chipAnimal);
      } else if (response.opcion === "cambiarNombre") {
        cambiarNombre(duenyo.id, response.nuevoNombre);
      } else if (response.opcion === "adoptarUnAnimal") {
        await adoptarAnimal(response.opcion);
      }
    });
  }
});
