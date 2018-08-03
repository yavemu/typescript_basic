interface Xmen {
  nombre:string,
  poder:string
}

let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneración"
}

function enviarMision(xmen:Xmen){
  console.log("Enviar a mision "+xmen.nombre)
}

function ejecutarPoder(xmen:Xmen){
  console.log("Ejecutar poder "+xmen.poder)
}

enviarMision(wolverine)
ejecutarPoder(wolverine)
