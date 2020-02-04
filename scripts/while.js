var sergio = {
	nombre:'sergio',
	apellido:'paez',
	edad:18,
	peso:66
};

console.log(`Al inicio del año el peso de ${sergio.nombre} fue de ${sergio.peso} kg`);

const incremento = 0.3;
const decremento = 0.3;

const AumentarPeso = (persona) => {persona.peso += incremento}; 
const BajarPeso = (persona) => {persona.peso -= decremento};

const meta = sergio.peso - 5;
const comeMucho = () => {return Math.random() < 0.3 };

const deporte = () => {return Math.random() < 0.4};
var dias = 0;

while(sergio.peso > meta )
{
		
	if(comeMucho())
	{
		AumentarPeso(sergio);
	}
	else if(deporte())
	{
		BajarPeso(sergio);
	}
	dias += 1;

}

console.log(`pasaron ${dias} dias hasta que  ${sergio.nombre} adelgazo 5 kg`);