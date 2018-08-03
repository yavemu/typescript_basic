"use strict";
// La clase se antecede de la palabra reservada class seguida del nombre que le queremos dar y abirmos y cerramos llaves
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        // Instanciamos las propiedades que queremos para en la Clase
        this.nombre = undefined;
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 0;
        // asignar a la propiedad de la clase el valor del parametro del constructor
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
// declarar variable que instancie la clase
var antman = new Avenger("Antman", "cap", "Scott Lang");
console.log(antman);
