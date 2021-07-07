const inquirer = require("inquirer");
const { preguntasDni, preguntas } = require("./datos/preguntas");
const { listarAnimales } = require("./listarAnimales");
const { listarEspecieAnimales } = require("./ListarEspecieAnimales");
const { mostrarDatosAnimal } = require("./mostrarDatosAnimal");
const { dniEnbd } = require("./schemas/Duenyo");

inquirer.prompt(preguntasDni).then(async (response) => {
  const hayDuenyo = await dniEnbd(response.dni);
  if (hayDuenyo) {
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
  }
});
