console.log("********** operaciones con fechas ***********");


// los meses en javascript comienza en el mes 0 = enero
var fecha = new Date(2017,9,20);

console.log(fecha);


fecha.setDate(25);

console.log(fecha);

// si seteo mas dias de lo que cuenta un mes, pasa al dia
// correspondiente del siguiente mes
fecha.setDate(32);
console.log(fecha);

console.log("creando funciones prototype y usandolas");

Date.prototype.sumarDias = function( dias ){

	this.setDate( this.getDate() + dias);
	return this;
}

Date.prototype.sumarAnios = function( anios ){

	this.setFullYear( this.getFullYear() + anios);
	return this;
}




console.log(fecha);
console.log(fecha.sumarDias(5));
console.log(fecha.sumarDias(-10));

console.log(fecha.getFullYear());
console.log(fecha.sumarAnios(10).getFullYear() );
