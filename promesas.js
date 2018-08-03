"use strict";
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada.");
        // Se ejecuta cuando la funcion es exitosa o termina bien
        // resolve()
        // Se ejecuta cuando la funcion es erronea o termina mal
        reject();
    }, 4000);
});
console.log("Paso 1");
// Para hacer el llamado a una promesa, se debe hacer con then
// then requiere dos parametros parametro_correcto, parametro_erroneo
prom1.then(function () {
    console.log("Ejecutarme cuando todo esta bien");
}, function () {
    console.error("Ejecutarme cuando algo este mal");
});
console.log("Paso 2");
