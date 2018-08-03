"use strict";
// La clase se antecede de la palabra reservada class seguida del nombre que le queremos dar y abirmos y cerramos llaves
var Avenger = /** @class */ (function () {
    function Avenger() {
        // Instanciamos las propiedades que queremos para en la Clase
        this.nombre = "Antman";
    }
    return Avenger;
}());
// declarar variable que instancie la clase
var antman = new Avenger();
console.log(antman);
