//Los objetos en javascript tienen la misma logica de los apuntadores.
/*
Con valores primitivos:
= para asignar
== para 	comparar llevandolos a mismo tipo de dato (parseo)
=== para comparar valor y tipo de dato, respetando el tipo de dato original

Con objetos:
Tanto = como == compararan la dirección fisica del objeto (en memoria RAM) si y 
solo si se trata del mismo objeto dará true.*/

var x = 4 , y = '4';

var sergio = {
	nombre:'sergio'
};

var sergioDos = {
	...sergio
};

//En este caso persona apunta al mismo espacio de memoria que el objeto sergio
//por eso si modificamos los atributos de persona, tambien se modifican en sergio

var persona = sergio;
