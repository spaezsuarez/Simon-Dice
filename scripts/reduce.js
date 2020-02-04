var sergio = {
	nombre:'sergio',
	apellido:'paez',
	edad:18,
	universidad:'UD',
	libros:20
};

var raul = {
	nombre:'raul',
	apellido:'vega',
	edad:20,
	universidad:'SALLE',
	libros:15
};

var miguel = {
	nombre:'miguel',
	apellido:'rico',
	edad:18,
	universidad:'UD',
	libros:32
};

var danielM = {
	nombre:'daniel',
	apellido:'medina',
	edad:19,
	universidad:'UD',
	libros:12
};

var danielL = {
	nombre:'daniel',
	apellido:'lopez',
	edad:17,
	universidad:'NA',
	libros:15
};

var javier = {
	nombre:'javier',
	apellido:'misat',
	edad:19,
	universidad:'UD',
	libros:20
};

var santiago = {
	nombre:'santiago',
	apellido:'avilez',
	edad:18,
	universidad:'EAN',
	libros:20
};

var nicolas = {
	nombre:'nicolas',
	apellido:'hernandez',
	edad:18,
	universidad:'EAN',
	libros:20
};

var personas = [sergio,raul,miguel,danielL,danielM,nicolas,javier,santiago];
//var suma = 0;

/*for (var i = 0; i < personas.length ; i++){
	suma += personas[i].libros;
}*/
// siempre debe ser el contador o acumulador y de segundo parametro los valores a sumar
//que en este caso son los atributos libros de los objetos

//Para el parametro del valor actual lo hace en base al tipo de datos que tiene el arreglo que
//invoque al metodo reduce(), es por eso que reconoce a personas como ese objeto y busca
// su atributo libros
const reducir = (acumulador,{ libros }) => {
	return acumulador += libros;
}

//En este caso reduce recibe como parametro la funcion que va a realizar la sumatoria y el valor inicial
// del acumulador que se le pasa como parametro a la funcion
var totalLibros = personas.reduce(reducir,0);

console.log(`el total de libros es ${totalLibros}`);