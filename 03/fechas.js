console.log("************ fechas **************");

// ver libreria moments.js para manejos de fechas (ver que onda)

var hoy = new Date(); 

var fMilisegundos = new Date(1);

//var fechaFija = new Date(anio, mes, dia, hora ,min, seg, milisegundos  )
var fechaFija = new Date(2018, 0, 30, 20 ,25 , 40, 1 );
var fechaFija2 = new Date(2017, 1, 1);

console.log(hoy);
console.log(fMilisegundos);
console.log(fechaFija);
console.log(fechaFija2);

// no utlizar getYear esta deprecada
console.log("getFullYear " +  hoy.getFullYear());

console.log("getDate " +  hoy.getDate());

console.log("getHours " +  hoy.getHours());

console.log("getMilliseconds " +  hoy.getMilliseconds());

console.log("getMonth " +  hoy.getMonth());

console.log("getSeconds " +  hoy.getSeconds());


// getTime es la representacion numerica en milisigundos de la fecha
console.log("getTime " +  hoy.getTime());

//getTime se utliza para medir cuanto lleva realizar una proceso

var inicio = new Date();

for( var  i = 0; i < 15000 ; i++){
	console.log("Algo..")
}

var fin = new Date();

//console.log(inicio);
//console.log(fin);

var tiempoEjucion = fin.getTime() - inicio.getTime();
console.log("tiempo de ejecucion en milisigundos " + tiempoEjucion);
console.log("tiempo de ejecucion en segundos " + tiempoEjucion/1000);
