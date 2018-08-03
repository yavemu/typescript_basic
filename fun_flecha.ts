// Ejemplo de la funcion normal y funcion Flecha enviando un parametro

let miFuncionN = function(a){
  return a;
}

let miFuncionF = a => a;

console.log("***** Con un parametro")
console.log(miFuncionN("Funcion Normal"))
console.log(miFuncionF("Funcion Flecha"))

// Ejemplo de la funcion normal y funcion Flecha enviando mas de un parametro
let miFuncion2N = function(a:number, b:number){
  return a+b;
}

let miFuncion2F = (a:number, b:number) => a+b;

console.log("***** Con mas de un parametro")
console.log(miFuncion2N(5,2))
console.log(miFuncion2F(9,6))

// Ejemplo de la funcion normal y funcion Flecha con mas de una linea
let miFuncion3N = function(nombre:string){
  nombre = nombre.toUpperCase()
  return nombre
}

let miFuncion3F = (nombre:string) => {
  nombre = nombre.toUpperCase()
  return nombre
}

console.log("***** Con mas de una linea")
console.log(miFuncion3N("Prueba nombre 1"))
console.log(miFuncion3F("Prueba nombre 2"))

let hulk = {
  nombre: 'Hulk',
  smashN: function () {
      var _this = this;
      setTimeout(function () { return console.log(_this.nombre + " Smash Normal!!!!"); });
  },
  smashF(){
    setTimeout(()=>console.log(this.nombre+" Smash Flecha!!!!"))
  }
}

hulk.smashN()
hulk.smashF()
