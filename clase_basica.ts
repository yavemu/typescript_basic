// La clase se antecede de la palabra reservada class seguida del nombre que le queremos dar y abirmos y cerramos llaves
class Avenger {

    // Instanciamos las propiedades que queremos para en la Clase
    nombre:string = "Antman";
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;
}

// declarar variable que instancie la clase
let antman:Avenger = new Avenger();

console.log(antman);
