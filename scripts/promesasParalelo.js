const api_url = 'https://swapi.co/api/';
const personas = 'people/:id'

const requestOtherPage = { crossDomain: true };


function getPersonaje(id) {
    return new Promise((resolve, rejected) => {

        const person = `${api_url}${personas.replace(':id',id)}`;

        $.get(person, requestOtherPage, function(data) {
            resolve(data);

        }).fail(() => {
            rejected(id);
        });

    });

}

function error(id) {
    console.log(`ERROR: no fue posible obtener el personaje ${id}`);

}

async function despliegue() {
    let idS = [];

    let tamañoArray = parseInt(prompt("Ingrese la cantidad de personajes que desea ver"));

    for (let i = 1; i <= tamañoArray; i++) {
        idS[i] = i;
    }

    promesasOrden = idS.map((id) => {
        return getPersonaje(id);
    });

    try {
        let arregloFinal = await Promise.all(promesasOrden);
        console.log(promesasOrden);
    } catch (id) {
        error(id);
    }


}

despliegue();