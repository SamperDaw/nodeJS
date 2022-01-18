const {crearArchivo} = require('./helpers/multiplicar');
const argv  = require('yargs').argv;





const arg3 = process.argv[2];
if(process.argv.length == 3){
[param, valor] = arg3.split('=');
}
if(param=='base'){
    crearArchivo(valor);
}else{
    console.log('Debe proporcionar una base');
}
console.log('ARGUMENTOS',argv);
console.log('base:',argv.base);