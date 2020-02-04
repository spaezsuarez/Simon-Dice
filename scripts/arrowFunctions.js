var sergio = {
	nombre:'sergio',
	edad:18
};

var miguel = {
	nombre:'miguel',
	edad:6
};

const MAYOR_DE_EDAD = 18;

const esMayorDeEdad = (persona) => {

	if (persona.edad >= MAYOR_DE_EDAD)
	{
		return true;
	}
	else
	{
		return false;
	}
}

/*const esMayorDeEdad = function (persona)
{
	if (persona.edad >= MAYOR_DE_EDAD)
	{
		return true;
	}
	else
	{
		return false;
	}
}*/

function imprimirMayoriaDeEdad(persona)
{
	if(esMayorDeEdad(persona))
	{
		console.log(`${persona.nombre} es mayor de edad`);
	}
	else
	{
		console.log(`${persona.nombre} es menor de edad`);
	}

}

function permitirAcceso(persona)
{
	if( !esMayorDeEdad(persona) )
	{
		alert("Acceso restringido");
	}
}