const api_url = 'https://swapi.co/api/';
const personas = 'people/:id'

const requestOtherPage = { crossDomain: true };


function getPersonaje(id) {
    return new Promise((resolve, rejected) => {

        const person = `${api_url}${personas.replace(':id',id)}`;

        $.get(person, requestOtherPage, function(data, state) {
            resolve(data, state);

        }).fail(() => {
            rejected(id);
        });

    });

}

getPersonaje(1)
    .then((persona, estado) => {
        console.log(`Hola soy ${persona.name} y el estado de la peticion fue ${estado}`);
        return getPersonaje(2);
    })
    .then((persona, estado) => {
        console.log(`Hola soy ${persona.name} y el estado de la peticion fue ${estado}`);
        return getPersonaje(3);
    })
    .then((persona, estado) => {
        console.log(`Hola soy ${persona.name} y el estado de la peticion fue ${estado}`);
    })
    .catch((id) => { console.log(`Ocurrio un error en el id ${id}`) });