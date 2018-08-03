// Un archivo simple de TypeScript
function saludar(nombre:string) {
    console.log("Hola "+nombre);
}

var wolverine = {
  nombre:"Logan",
}

saludar(wolverine.nombre);


let nombre:string = "Yamid"
let apelido:string = "Velez"
let edad:number = 30

let texto = `Hola ${nombre} ${apelido}, tienes ${edad} años.
Feliz dia.`

console.log(texto)
