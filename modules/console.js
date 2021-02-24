console.info('Algo'); //Equivalente a .log pero se usa para informar
console.error('Algo'); //Usado para ver los errores de manera mas visual
console.warn('Algo'); //Usado para ver los errores de manera mas visual
console.table('Algo'); //Muestra datos en forma de 'Modulos' o tablas
console.group('Algo'); //Nos permite agrupar muchos Logs para decir que forman parte de una cosa
//Ej 
    console.group('Grupo 1');
    console.log('Cosa Grupo 1');
    console.log('Otra Cosa Grupo 1');
    console.log('Una Cosa Grupo 1');
    console.groupEnd('Grupo 1'); //Termina la agrupacion

console.clear(); //Limpia la consola
