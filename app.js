"use strict";
// Un archivo simple de TypeScript
function saludar(nombre) {
    console.log("Hola " + nombre);
}
var wolverine = {
    nombre: "Logan",
};
saludar(wolverine.nombre);
var nombre = "Yamid";
var apelido = "Velez";
var edad = 30;
var texto = "Hola " + nombre + " " + apelido + ", tienes " + edad + " a\u00F1os.\nFeliz dia.";
console.log(texto);
