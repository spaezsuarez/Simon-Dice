var sergio = {
	nombre:'sergio',
	apellido:'paez',
	edad:18
};

var felipe = {
	nombre:'felipe',
	apellido:'ortiz',
	edad:15
};



function mayorDeEdad(persona)
{
	if(persona.edad >= 18)
	{
		console.log(`${persona.nombre} ${persona.apellido} es mayor de edad`);
	}
	else
	{
		console.log(`${persona.nombre} ${persona.apellido} es menor de edad`);

	}

}

mayorDeEdad(sergio);
mayorDeEdad(felipe);