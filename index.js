require("./servidor");
const inquirer = require("inquirer");
const { preguntasDni, preguntas } = require("./datos/preguntas");
const {
  listarAnimales,
  listarEspecieAnimales,
  mostrarDatosAnimal,
  adoptarAnimal,
  cambiarNombre,
} = require("./bd/consultas/consultasAnimales");
const { dniEnbd } = require("./schemas/Duenyo");

inquirer.prompt(preguntasDni).then(async (response) => {
  const { hayDuenyo, duenyo } = await dniEnbd(response.dni);
  if (hayDuenyo) {
    inquirer.prompt(preguntas).then(async (response) => {
      if (response.opcion === "todosLosAnimales") {
        listarAnimales(duenyo.id);
      } else if (response.opcion === "todosAnimalesEspecie") {
        listarEspecieAnimales(duenyo.id, response.especie);
      } else if (response.opcion === "datosUnAnimal") {
        mostrarDatosAnimal(duenyo.id, response.chipAnimal);
      } else if (response.opcion === "adoptarUnAnimal") {
        await adoptarAnimal(response.opcion, duenyo.id);
      } else if (response.opcion === "cambiarNombre") {
        cambiarNombre(duenyo.id, response.nuevoNombre);
      }
    });
  } else {
    process.exit(0);
  }
});
