var sergio = {
	nombre:'sergio',
	apellido:'paez',
	edad:18,
	universidad:'UD',
	casado:false
};

var raul = {
	nombre:'raul',
	apellido:'vega',
	edad:20,
	universidad:'SALLE',
	casado:false
};

var miguel = {
	nombre:'miguel',
	apellido:'rico',
	edad:18,
	universidad:'UD',
	casado:false
};

var danielM = {
	nombre:'daniel',
	apellido:'medina',
	edad:19,
	universidad:'UD',
	casado:false
};

var danielL = {
	nombre:'daniel',
	apellido:'lopez',
	edad:17,
	universidad:'NA',
	casado:false
};

var javier = {
	nombre:'javier',
	apellido:'misat',
	edad:19,
	universidad:'UD',
	casado:false
};

var santiago = {
	nombre:'santiago',
	apellido:'avilez',
	edad:18,
	universidad:'EAN',
	casado:false
};

var nicolas = {
	nombre:'nicolas',
	apellido:'hernandez',
	edad:18,
	universidad:'EAN',
	casado:false
};

const casado = (persona) => {

	if (persona.universidad === 'UD'){
		return {
			...persona,
			casado:true
		};
	}
}

var personas = [sergio,raul,miguel,danielL,danielM,nicolas,javier,santiago];

var seCasan = personas.map(casado);

