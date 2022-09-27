const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "O valor de qual tabuada quer calcular.",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Exibe o resultado da tabuada.",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "O tamanho da tabuada.",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "A base deve ser um número.";
    }
    if (isNaN(argv.h)) {
      throw "O tamanho limite da tabuada deve ser um número.";
    }
    return true;
  }).argv;

module.exports = argv;
