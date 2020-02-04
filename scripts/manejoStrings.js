xalert("Funciona");
var nombre = "sergio";
var apellido = "paez";

var apellidoMayuscula = "SUAREZ";

var nombreMayuscula = nombre.toUpperCase() +" "+ apellido.toUpperCase();
var apellidoMinuscula = apellidoMayuscula.toLowerCase();

var caracterNombre = nombre.charAt(0);

var cantidadLetras = parseInt(prompt("Ingresa la cantidad de letras que tiene tu nombre:"));

if (cantidadLetras === nombre.length){
	alert("CORRECTO");
}
else{
	alert("INCORRECTO");
}

//INTERPOLACION DE TEXTO

var nombreNuevo = `${nombre} ${apellido}`;

var str = nombre.substr(1,2);	