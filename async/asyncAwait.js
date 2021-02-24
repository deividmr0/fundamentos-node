async function hola(nombre) {
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
            resolve();
        }, 1000);
    })
    
}

async function main() {
    const nombre = await hola("David");
                   await hablar();
                   await adios(nombre);
    
}

main();