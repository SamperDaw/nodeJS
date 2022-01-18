const {dividir} = require("./mod_promeas");
const colors = require('colors');
const argv = require('yargs').argv;

const persona = {
    nombre: 'Juan',
    apellido: 'López',
    departamento: 'Informatica',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} depto: ${this.departamento}`
    }
}
let { nombre, apellido, departamento } = persona;
console.log(nombre, apellido, 'depto:', departamento);

//console.log(persona.getNombre());

const plantilla = ['Juan', 'Maria', 'Rosa'];
let [n1, n2, n3] = plantilla;
console.log(n1, n2, n3);

const suma = (n1, n2) => n1 + n2;

console.log('suma:', suma(3, 4));

//setTimeout(() => { console.log('Hola Mundo') }, 1500)

const getUsuarioById = (id) => {
    const plantilla = [{
        id: 1,
        nombre: 'Juan'
    }, {
        id: 2,
        nombre: 'Maria'
    }]

    const miPromesa = new Promise(
        (resolve, reject) => {
            let usuario = plantilla.find(persona => persona.id == id)?.nombre;
            if (usuario) {
                resolve(usuario)
            } else {
                reject(`Error usuario con id ${id} No Existe.`)
            }
        }
    )

    return miPromesa;
}

getUsuarioById(1)
.then((usuario)=>console.log('Usuario encontrado: '.blue + usuario))
.catch((msg)=>console.log(msg))
console.log('division'.bgBlue)
console.log(argv);
n1 = argv.n1;
n2 = argv.n2;
dividir(n1,n2)
.then((resultado)=>console.log(`Resultado: ${resultado}`.rainbow))
.catch((msg)=>console.log(msg))
