var sergio = {
	nombre:'sergio',
	edad:18
};

var miguel = {
	nombre:'miguel',
	edad:6
};

const MAYOR_DE_EDAD = 18;

const esMayorDeEdad = (persona) => {return persona.edad >= MAYOR_DE_EDAD;}
	
const esMenorDeEdad = (persona) => {return !esMayorDeEdad(persona);}

console.log(esMenorDeEdad(sergio));
console.log(esMenorDeEdad(miguel));