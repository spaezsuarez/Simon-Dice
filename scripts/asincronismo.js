const api_url = 'https://swapi.co/api/';
const personas = 'people/:id'

//En el replace podria mandarle una funcio que retorne un id aleatorio o en base a una solicutud
function getId(min,max){
	var aleatoria = Math.floor(Math.random()*(max - min)) + min;
	return aleatoria;

}

const enRespuesta = function(data)
{
	console.log(`Hola me llamo ${data.name} y cumplo el ${data.birth_year}`);

}

function main()
{
	var entrada = prompt("¿Desea obtener un personaje de forma aleatoria?");

	if(entrada === 'si')
	{
		var maximo = parseInt(prompt("Escriba el rango maximo de personajes en los cuales esta dispuesto a buscar"));
		var personajeUrl = `${api_url}${personas.replace(':id',getId(1,maximo))}`;
		const requestOtherPage = {crossDomain:true};
		$.get( personajeUrl , requestOtherPage  , enRespuesta );

	}
	else
	{
		var id = parseInt(prompt("Ingrese un numero y se le debolvera el del personaje al que corresponda"));
		const requestOtherPage = {crossDomain:true};
		var personajeUrl = `${api_url}${personas.replace(':id',id)}`;
		$.get( personajeUrl , requestOtherPage  , enRespuesta );
	}

	
	

	

}

main();