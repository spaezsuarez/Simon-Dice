var contador = 0;

function llueve(){
	return Math.random < 0.25;
}

do
{
	contador += 1;
}
while(!llueve())

console.log(`Fui a ver si llovia ${contador} veces` );