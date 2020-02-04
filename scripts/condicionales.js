var sergio = {
	nombre:'sergio',
	apellido: 'paez',
	edad: 18,
	ingeniero:false,
	gamer:true,
	cocinero:false,
	dj:false,
	cantante:true
};

var miguel = {
	nombre:'miguel',
	apellido: 'paez',
	edad: 51,
	ingeniero:true,
	gamer:false,
	cocinero:true,
	dj:true,
	cantante:false
};

function ImprimirProfesiones(persona)
{

	console.log(`${persona.nombre} es : ` );

	if(persona.ingeniero === true){
		console.log("Ingeniero");
	}

	if(persona.gamer === true){
		console.log("Gamer");
	}

	if(persona.cocinero === true){
		console.log("Cocinero");
	}

	if(persona.dj === true){
		console.log("Dj");
	}

	if(persona.cantante === true){
		console.log("Cantante");
	}
	
}

ImprimirProfesiones(sergio);
ImprimirProfesiones(miguel);