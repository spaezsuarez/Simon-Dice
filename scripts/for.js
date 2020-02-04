var sergio = {
	nombre:'sergio',
	apellido:'paez',
	edad:18,
	peso:66
};

console.log(`Al inicio del año el peso de ${sergio.nombre} fue de ${sergio.peso} kg`);

const incremento = 0.2;
const decremento = 0.21;

const AumentarPeso = (persona) => {persona.peso += incremento}; 
const BajarPeso = (persona) => {persona.peso -= decremento};

for(var x = 1; x <= 366; x++)
{
	var random = Math.random();
	if(random < 0.25)
	{
		AumentarPeso(sergio);

	}
	else if (random < 0.50)
	{
		BajarPeso(sergio);	

	}
	else if(sergio.peso < 0){
		AumentarPeso(sergio);
	}

}
console.log(`Al final del año el peso de ${sergio.nombre} fue de ${parseFloat(sergio.peso.toFixed(2))} kg`);