"use strict";
// *****************************************************************************************
// Destructuracion de Objetos
// *****************************************************************************************
var avenger = {
    nombre: "Steve",
    nickname: "Capitan America",
    poder: "Droga"
};
// Si quisieramos obtener cualquier propiedad del objeto avenger:
/*
let nombre = avenger.nombre
let nickname = avenger.nickname
let poder = avenger.poder

console.log(`${nombre} | ${nickname} | ${poder}`)
*/
// Al usar destructuración se realiza de la siguiente forma
// la estructura es let {propiedades separadas por coma} = objeto
// las propiedades se les puede poder alias (camiar el nombre) , para esto se realizaria asi
//  let {propiedad:alias, propiedad:alias} = objeto
var nombre = avenger.nombre, poder = avenger.poder, nickname = avenger.nickname;
console.log(nombre + " | " + nickname + " | " + poder);
// *****************************************************************************************
// Destructuracion de Arreglos
// *****************************************************************************************
var arreglo = ["Uno", "Dos", "Tres"];
var pos1 = arreglo[0], pos2 = arreglo[1], pos3 = arreglo[2];
console.log(pos1, pos2, pos3);
