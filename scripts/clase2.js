class Persona 
{
	constructor(nombre,edad,apellido,altura)
	{
		this.nombre = nombre;
		this.edad = edad;
		this.apellido = apellido;
		this.altura = altura;

	}

	saludar()
	{
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
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

	saludar(){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
	}

}

//var sergio = new Persona('sergio',18,'paez',1.71);
//	var carla = new Persona('carla',18,'valero',1.68);

