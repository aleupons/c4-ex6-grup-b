const chalk = require("chalk");

const errorServidor = (err, puerto) => {
  console.log(chalk.red("No se ha podido levantar el servidor"));
  if (err.code === "EADDRINUSE") {
    console.log(
      chalk.red(`El port ${chalk.bgRed.white.bold(puerto)} está ocupado`)
    );
  }
};

module.exports = { errorServidor };
