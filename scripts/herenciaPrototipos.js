// Los prototipos siempre son objetos
//

function heredaDe(prototipoHijo,prototipoPadre)
{
	var fn = function(){}
	fn.prototype = prototipoPadre.prototype;
	prototipoHijo.prototype = new fn;
	prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre,apellido,edad,altura)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.altura = altura;

}

Persona.prototype.saludar = function() {
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
	return this.altura > 1.70;
}

function Desarrollador(nombre,apellido,edad,altura)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.altura = altura;

}

heredaDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function()
{
	console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
}



//var sergio = new Persona('sergio','paez',18,1.71);

//var carla = new Persona('carla','valero',18,1.68);

var sergio = new Desarrollador("sergio","paez",18,1.71);