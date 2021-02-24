const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        console.log(data.toString());
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (error) => {
       if (error) {
           throw new Error(error);
       } else {
           console.log('Escrito correctamente');
       }
    })
}

escribir(__dirname + '/archivo.txt', 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit');
leer(__dirname + '/archivo.txt');
borrar(__dirname + '/archivo.txt', console.log);