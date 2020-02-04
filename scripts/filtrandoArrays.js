var sergio = {
	nombre:'sergio',
	apellido:'paez',
	edad:18,
	universidad:'UD'
};

var raul = {
	nombre:'raul',
	apellido:'vega',
	edad:20,
	universidad:'SALLE'
};

var miguel = {
	nombre:'miguel',
	apellido:'rico',
	edad:18,
	universidad:'UD'
};

var danielM = {
	nombre:'daniel',
	apellido:'medina',
	edad:19,
	universidad:'UD'
};

var danielL = {
	nombre:'daniel',
	apellido:'lopez',
	edad:17,
	universidad:'NA'
};

var javier = {
	nombre:'javier',
	apellido:'misat',
	edad:19,
	universidad:'UD'
};

var santiago = {
	nombre:'santiago',
	apellido:'avilez',
	edad:18,
	universidad:'EAN'
};

var nicolas = {
	nombre:'nicolas',
	apellido:'hernandez',
	edad:18,
	universidad:'EAN'
};

//const UD = (persona) => {return persona.universidad === 'UD'};

var personas = [sergio,raul,miguel,danielL,danielM,nicolas,javier,santiago];
var estudiantesUd = personas.filter( (persona) => {return persona.universidad === 'UD'});

for (var i = 0; i < estudiantesUd.length; i++) {
	console.log(estudiantesUd[i]);
}