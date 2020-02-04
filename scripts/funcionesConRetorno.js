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



function esMayorDeEdad(persona)
{
	if(persona.edad >= 18)
	{
		return true;
	}
	else
	{
		return false;

	}

}

function main(persona)
{

	if(esMayorDeEdad(persona) == true)
	{
		alert("Felicidades puedes comprar alcohol");
	}
	else
	{
		alert("Lo siento legalmente no puedes comprar, pero igual hagale :v");
	}

}

main(sergio);
main(felipe);