function asyncFunction(callback) {

    setTimeout(() => {
        console.log("timeout");
        callback();
    }, 1000);
}
console.log("Inicio");
asyncFunction(function() {
    console.log("Fin");
});
