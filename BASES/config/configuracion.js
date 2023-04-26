const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
.option('tabla', {
    alias: 't',
    type: 'number',
    description: 'Table de multiplicar'
  })
  .option('listar', {
    alias: 'l',
    type: 'boolean',
    default: false,
    description: 'Run with verbose logging'
  })
  .option('hasta', {
    alias: 'h',
    type: 'number',
    default: 10,
    description: 'valores hasta'
  })
  
  .check((p, options)=>{
      if( isNaN(p.tabla) ){
        throw "La base debe ser numero";
      }         
      if( isNaN(p.hasta) ){
        throw "La base debe ser numero";
      }         
      return  true;
  })
.argv

 module.exports =argv;