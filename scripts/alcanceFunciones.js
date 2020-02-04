//Variable global ya que es declarada fuera de las funciones
/*Cuando se tiene una variable de este tipo es asignada al objeto global del entorno
por ejemplo en el lado del frontend es el objeto window y en backend seria node

*/
var nombre = "sergio";

function imprimirNombreMayuscula(ownName){

	console.log(ownName.toUpperCase())
}

imprimirNombreMayuscula(nombre);