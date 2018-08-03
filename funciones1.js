"use strict";
// Las funciones pueden recibir parametros
// Los parametros pueden ser obligatorios, opcionales o por defecto
function activar(quien, //parametro obligatorio
objeto, //paramtro con valor por defecto
momento //parametro opcional (el simbolo ? indica que es opcional)
) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " ha activado la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " ha activado la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon");
activar("Gordon", "BATISEÑAL");
activar("Gordon", "batiseñal", "tarde");
