var nombre = prompt("Ingresa tu nombre:");
var edad = parseInt(prompt("Ingresa tu edad:"));

function imprimirEdad(nombre,edad)
{
	console.log(`${nombre} tiene ${edad} años `);

}

imprimirEdad(nombre,edad);