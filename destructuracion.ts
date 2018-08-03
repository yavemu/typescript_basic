// *****************************************************************************************
// Destructuracion de Objetos
// *****************************************************************************************

let avenger = {
  nombre: "Steve",
  nickname: "Capitan America",
  poder: "Droga"
}

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

let {nombre, poder, nickname} = avenger;
console.log(`${nombre} | ${nickname} | ${poder}`)

// *****************************************************************************************
// Destructuracion de Arreglos
// *****************************************************************************************

let arreglo = ["Uno","Dos","Tres"];

let [pos1,pos2,pos3] = arreglo
console.log(pos1, pos2, pos3)
