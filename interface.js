"use strict";
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
function enviarMision(xmen) {
    console.log("Enviar a mision " + xmen.nombre);
}
function ejecutarPoder(xmen) {
    console.log("Ejecutar poder " + xmen.poder);
}
enviarMision(wolverine);
ejecutarPoder(wolverine);
