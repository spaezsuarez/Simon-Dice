var entrada = prompt("¿Cual es tu signo?");
var condicion = entrada.toUpperCase();

switch(condicion)
{
	case 'ARIES':
		alert("Esté preparado, ya que su inseguridad conspirará en contra de todos sus objetivos. Proyecte las metas y trate de cumplirlas de una manera ordenada.");
		break;

	case 'TAURO':
		alert("Verá que en poco tiempo, alcanzará el éxito como consecuencia del esfuerzo y empeño que ha puesto en todos sus objetivos profesionales y personales.");
		break;

	case 'GEMINIS':
		alert("Anímese y comience a estudiar lo que le guste sin calcular de manera racional. Sepa que, haga lo que haga, siempre se le presentará una oportunidad.");
		break;

	case 'CANCER':
		alert("Intente modificar la forma en que se desenvuelve, dejando de insistir en los detalles y aplicando la síntesis en todos sus pensamientos. Será muy positivo para su vida.");
		break;

	case 'LEO':
		alert("Transitará una jornada donde se reencontrará con su natural entusiasmo. Prepárese, ya que será una etapa óptima para tomar decisiones importantes.");
		break;

	case 'VIRGO':
		alert("Aproveche que su mente estará activa y podrá incrementar la inteligencia. De esta forma, podrá realizar cualquier actividad sin tener mucho esfuerzo.");
		break;

	case 'LIBRA':
		alert("Prepárese, ya que en estos días se acentuará su capacidad imaginativa y fantasiosa en todos los proyectos que deba emprender. Aproveche y haga uso de ellas.");
		break;

	case 'ESCORPIO':
		alert("Con la Luna en su signo, le convendrá aprovechar este tránsito para lograr los objetivos que tiene en mente hace tiempo y nunca pudo lograr.");
		break;

	case 'SAGITARIO':
		alert("En este momento, sentirá que ya no puede guardar más sus emociones. Compártalas con los demás y serán bien recibidas. Exprese todo lo que tiene adentro.");
		break;

	case 'CAPRICORNIO':
		alert("Intente sumergirse en su interior, allí encontrará la tranquilidad que tanto necesita. Etapa para que cultive el bienestar, la tranquilidad y la buena vida.");
		break;

	case 'ACUARIO':
		alert("Evite los esfuerzos y tómese el tiempo necesario para cumplir con todas sus obligaciones, ya que un cierto estado de indiferencia lo acompañará en el día.");
		break;

	case 'PISCIS':
		alert("Manténgase firme en sus pensamientos. En caso que deba tomar una decisión piénselo bien, ya que puede actuar erróneamente. Avance de manera prudente.");
		break;

	default:
		alert("Por favor ingrese bien su signo");
		break;
}