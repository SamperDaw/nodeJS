crearArchivo=(base = 5)=> {
    const fs = require('fs');
    let salida = '';
    console.clear();
    console.log('=====================================');
    console.log('   tabla del: ', base);
    console.log('=====================================');
    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;

    })
}
module.exports = {crearArchivo};


