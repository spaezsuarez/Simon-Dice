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

//De esta forma se desglosa un objeto en javascript para modificar sus tributos o aggregar nuevos

/*
En esta funcion el objeto que se pasa como parametro es de referencia ya que se modifica de forma
global 
*/
function cumpleaños(persona)
{
	return{
		...persona,
		edad:persona.edad += 1
	};

}

// y en esta funcion es como valor ya que a pesar de mandarle el mismo objeto y modificar el valor 
// solo se mantiene de forma global en la funcion

/*function cumpleaños(persona)
{
	return{
		...persona,
		edad:persona.edad + 1
	};

}-/