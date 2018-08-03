// La clase se antecede de la palabra reservada class seguida del nombre que le queremos dar y abirmos y cerramos llaves
class Avenger {

    // Instanciamos las propiedades que queremos para en la Clase
    nombre:string = undefined;
    equipo:string = undefined;
    nombreReal:string = undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
      // asignar a la propiedad de la clase el valor del parametro del constructor
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
    }
}

// declarar variable que instancie la clase
let antman:Avenger = new Avenger("Antman","cap","Scott Lang");

console.log(antman);
