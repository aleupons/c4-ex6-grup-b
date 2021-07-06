const preguntas = [
  {
    name: "dni",
    message: "Por favor inidique su DNI:",
    type: "input",
  },
  {
    name: "opcion",
    message: "Opciones",
    type: "list",
    choices: [
      { value: "todosLosAnimales", name: "Listar todos mis animales" },
      {
        value: "todosAnimalesEspecie",
        name: "Listar todos mis animales de una especie",
      },
      {
        value: "datosUnAnimal",
        name: "Mostrar los datos de uno de mis animales",
      },
      { value: "adoptarUnAnimal", name: "Adoptar un animal" },
      { value: "cambiarNombre", name: "Cambiar mi nombre" },
    ],
  },
  {
    name: "especie",
    message: "Por favor inidique la especie:",
    type: "input",
    when: (respuestaAnterior) =>
      respuestaAnterior.opcion === "todosAnimalesEspecie",
  },
  {
    name: "chipAnimal",
    message: "Por favor inidique el chip del animal:",
    type: "input",
    when: (respuestaAnterior) => respuestaAnterior.opcion === "datosUnAnimal",
  },
  {
    name: "animalParaAdoptar",
    message: "¿Qué animal desearia adoptar?",
    type: "list",
    choices: [
      { value: "chipAnimal", name: "NommbreAnimal" },
      { value: "chipAnimals", name: "NommbreAnimals" },
    ],
    when: (respuestaAnterior) => respuestaAnterior.opcion === "adoptarUnAnimal",
  },
  {
    name: "nuevoNombre",
    message: "Por favor indique un nuevo nombre: ",
    type: "input",
    when: (respuestaAnterior) => respuestaAnterior.opcion === "cambiarNombre",
  },
];

module.exports = {
  preguntas,
};
