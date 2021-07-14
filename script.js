//Definir cantidad de variables usare en este ejemplo.

var nombre = prompt ('Indique el Nombre del trabajador');
var cant_h_trabajadas= Number (prompt ('Legalice cuantas horas laboro durante la semana'));
var pago= 0 ;
var horas_extra= 0 ;

if (cant_h_trabajadas <=40){ //verificaremos si el trabajador hice 40 o menos horas.
pago = cant_h_trabajadas * 16000; // mutiplicaremos la cantidad de horas por el precio de horas.
alert (`El/la. trabajador/a: ${nombre} no genero horas extra esta semana por ende su pago sera de ${pago}`);/*mensaje de cuanto deberia cobrar */
}
else if (cant_h_trabajadas > 40){ // miraremos si el trabajo horas superiores a 40.
horas_extra= cant_h_trabajadas - 40; // miramos cuantas horas extras hizo.
pago = (horas_extra * 20000) + (40 * 16000); // hacemos el calculo segun lo trabajado.
alert (`El/la. trabajador/a ${nombre} generó ${horas_extra} horas extra esta semana, por ende su pago sera de $${pago}`); /*mensaje de cuanto debera cobrar*/
}