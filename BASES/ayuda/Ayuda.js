const { writeFileSync } = require('fs');
var colors = require('colors'); 


const table = async (base, listar, hasta) => {
    try {                
        let Nombre = `Tabla de multiplicar de ${base}.txt`;
        let data = "";
        let consola = "";
        for (let index = 1; index <= hasta; index++) {
            data += `${base} X ${index} = ${base * index} \n`
            consola += `${base} ${"X".red} ${index} = ${base * index} \n`
        }

        writeFileSync(`Archivos/${Nombre}`, data);     
        if(listar)
            console.log(consola.green);
        return 'El Nombre del archivo es :'+Nombre.rainbow;
    }
    catch (expor) {        
        throw new Error("Este es un error");
    }
}


module.exports = {
    table
}