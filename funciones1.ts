// Las funciones pueden recibir parametros
// Los parametros pueden ser obligatorios, opcionales o por defecto

function activar(
  quien:string, //parametro obligatorio
  objeto:string = "batiseñal", //paramtro con valor por defecto
  momento?:string //parametro opcional (el simbolo ? indica que es opcional)
){

  let mensaje:string

  if (momento) {
    mensaje = `${quien} ha activado la ${objeto} en la ${momento}`
  } else {
    mensaje = `${quien} ha activado la ${objeto}`
  }

  console.log(mensaje)
}

activar("Gordon")
activar("Gordon","BATISEÑAL")
activar("Gordon","batiseñal","tarde")
