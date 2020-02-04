class Persona 
{
	constructor(nombre,edad,apellido,altura)
	{
		this.nombre = nombre;
		this.edad = edad;
		this.apellido = apellido;
		this.altura = altura;

	}

	saludar(funcion)
	{
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);

		if(funcion)
		{
			funcion(this.nombre,this.apellido,false);
		}
	}

	soyAlto()
	{
		return this.altura > 1.70;
	}

	

}

class Desarrollador extends Persona
{
	constructor(nombre,edad,apellido,altura)
	{
		super(nombre,edad,apellido,altura);
		this.nombre = nombre;
		this.edad = edad;
		this.apellido = apellido;
		this.altura = altura;

	}

	saludar(funcion)
	{
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
		if(funcion)
		{
			funcion(this.nombre,this.apellido,true);
		}

	}

}

function responder(nombre,apellido,esDev)
{
	console.log(`Buen dia ${nombre} ${apellido}`);
	if (esDev)
	{
		console.log("Ah mira no sabia que eras desarrollador/a	");
	}
}	

var sergio = new Desarrollador('sergio',18,'paez',1.71);
var carla = new Persona('carla',18,'valero',1.68);
var arturo = new Persona('arturo',60,'suarez',1.80);

sergio.saludar(responder);
carla.saludar(responder);
arturo.saludar();
