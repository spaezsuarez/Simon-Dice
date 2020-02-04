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

//Si yo manejo este metodo como una arrow function me va a dar error ya que en el contexto
//de las arrow functions el this no se refiere a la instancia de la "clase" o en este caso prototipo
//sino que en se refiere al objeto global del entorno en este caso el objeto window

Persona.prototype.soyAlto = function(){
	return this.altura > 1.70;
}

var sergio = new Persona('sergio','paez',18,1.71);

var carla = new Persona('carla','valero',18,1.68);
