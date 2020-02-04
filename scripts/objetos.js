var sergio = {
	nombre:'sergio',
	apellido: 'paez',
	edad: 18
};

var miguel = {
	nombre:'miguel',
	apellido: 'paez',
	edad: 51
};

function imprimirNombreyEdad(persona){

	console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`);
}

imprimirNombreyEdad(sergio);
imprimirNombreyEdad(miguel);