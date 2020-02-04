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

var personas = [];

personas[0] = sergio;
personas[1] = raul;
personas[2] = miguel;
personas[3] = danielM;
personas[4] = danielL;
personas[5] = javier;
personas[6] = nicolas;
personas[7] = santiago;

/*
for(var x = 0; x < personas.length; x++){
	console.log(personas[x].nombre + " " + personas[x].apellido);
}
}
*/

for(var x in personas){
	console.log(personas[x].nombre + " " + personas[x].apellido);
}