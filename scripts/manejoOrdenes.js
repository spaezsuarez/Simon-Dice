const api_url = 'https://swapi.co/api/';
const personas = 'people/:id'

const requestOtherPage = {crossDomain:true};



function getPersonaje(id,callback)
{
	console.log(id);
	const person = `${api_url}${personas.replace(':id',id)}`;

	//person: url al cual voy a hacer la peticion
	//requestOtherPage:  Son los valores que queremos enviar con método GET aunque en este caso no envio nada.
	/*callback: Función a ejecutar cuando se obtiene con éxito la URL.
		– datos: Objeto devuelto con los valores de la petición GET.
		– estado: Estado de la petición GET («success», «notmodified», «error», «timeout» o «parsererror»)
		– xhr: Valores del objeto XMLHttpRequest. */

	$.get(person,requestOtherPage, callback ).fail(function(){
		console.log(`Lo sentimos ha ocurrido un error y no hemos podido encontrar al personaje ${id}`);
	});	

	
	
}

//Encontrar la forma de hacer un callback de una cantidad n de requests

getPersonaje(1,function (personas,state){
	console.log(`Hola me llamo ${personas.name}`);
	console.log(`The request to the server was ${state}`);

	getPersonaje(2,function (personas,state){
		console.log(`Hola me llamo ${personas.name}`);
		console.log(`The request to the server was ${state}`);


		getPersonaje(3,function (personas,state){
			console.log(`Hola me llamo ${personas.name}`);
			console.log(`The request to the server was ${state}`);


			getPersonaje(4,function(personas,state){
				console.log(`Hola me llamo ${personas.name}`);
				console.log(`The request to the server was ${state}`);
				

				getPersonaje(5,function(personas,state){
					console.log(`Hola me llamo ${personas.name}`);
					console.log(`The request to the server was ${state}`);
				});

			})

		})
	})
});