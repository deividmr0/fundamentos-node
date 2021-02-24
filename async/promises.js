function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
    
}
console.log("Iniciando el proceso");


function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
    
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios, ' + nombre);
            reject();
        }, 1000);
    })
    
}


hola('David')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso");
     })
     .catch(error => {
         console.error(error);
     })