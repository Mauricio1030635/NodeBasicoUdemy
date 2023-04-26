const { table } = require("./ayuda/Ayuda");
const argv = require("./config/configuracion");

table(argv.tabla,argv.listar, argv.hasta ).then(x=>console.log(x)).catch(x=>console.log(x.rainbow));