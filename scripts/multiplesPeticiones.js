const api_url = 'https://swapi.co/api/';
const personas = 'people/:id'

const requestOtherPage = {crossDomain:true};

const onResponse = function(data){
	console.log(`Hola me llamo ${data.name}`);
}


function getPersonaje(id){
	const person = `${api_url}${personas.replace(':id',id)}`;
	$.get(person,requestOtherPage,onResponse);
	
}

var personajes = parseInt(prompt("Ingrese la cantidad de personajes que desea desplegar:"));

for(var i = 1; i <= personajes; i++)
{
	getPersonaje(i);

}