const inquirer = require("inquirer");
const { preguntas } = require("./datos/preguntas");

inquirer.prompt(preguntas).then((response) => console.log(response));
