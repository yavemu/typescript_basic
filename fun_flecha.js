"use strict";
// Ejemplo de la funcion normal y funcion Flecha enviando un parametro
var miFuncionN = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log("***** Con un parametro");
console.log(miFuncionN("Funcion Normal"));
console.log(miFuncionF("Funcion Flecha"));
// Ejemplo de la funcion normal y funcion Flecha enviando mas de un parametro
var miFuncion2N = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
console.log("***** Con mas de un parametro");
console.log(miFuncion2N(5, 2));
console.log(miFuncion2F(9, 6));
// Ejemplo de la funcion normal y funcion Flecha con mas de una linea
var miFuncion3N = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log("***** Con mas de una linea");
console.log(miFuncion3N("Prueba nombre 1"));
console.log(miFuncion3F("Prueba nombre 2"));
var hulk = {
    nombre: 'Hulk',
    smashN: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " Smash Normal!!!!"); });
    },
    smashF: function () {
        var _this_1 = this;
        setTimeout(function () { return console.log(_this_1.nombre + " Smash Flecha!!!!"); });
    }
};
hulk.smashN();
hulk.smashF();
