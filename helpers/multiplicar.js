const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    const rbw = colors.america;
    const trace = colors.gray;

    if (listar) {
      console.log(trace("==================="));
      console.log(rbw("  Tabuada do "), base);
      console.log(trace("==================="));
      console.log(rbw(salida));
    }

    fs.writeFileSync(`./saida/tabuada-${base}.txt`, salida);

    console.log(`tabuada-${base}.txt criada com sucesso.`);
    return `tabuada-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
