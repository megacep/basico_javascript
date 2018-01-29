// lo primero que hace el motor de javascript es barrer todo el archivo
// y luego ejecuta linea por linea lo que se le indica
// lo loco es que se puede llamar una funcion antes de que esta este definida

llamadaAFuncionAntesDeDeclarar();

function llamadaAFuncionAntesDeDeclarar()
{
	console.log("comportamiento extraño");
}

function primeraFuncion(){
	var a = 20;

	console.log( a );
}

console.log("Dentro de funciones.js")

primeraFuncion();

// las funciones siempre devuelven un valor.
function devuelvUndefinied(){

}

console.log( devuelvUndefinied()) ;

/********************************************/
console.log("puntero a fucnion, o delegado")

function invocada(){
	console.log("invocada");
}

var miFuncion =  invocada;

console.log( miFuncion() );


/*************************************************/
console.log("*******************PARAMETROS de funciones**************");

function imprimir(nombre, apellido){

	apellido = apellido || "xxx";
	// if( apellido === undefined ){
	// 	apellido = "xxxx";
	// }

	console.log( nombre + " " + apellido );
}

imprimir("Juan","lopez")
imprimir("pepe");


// LOS OBJETOS SIEMPRE SE PASA POR REFERENCIA
function imprimir2( person ){
	console.log( persona.nombre + " " + person.apellido );
}

imprimir2({
	nombre: "Juan",
	apellido: "Padilla"
});

var obj = {
	nombre: "pepe",
	apellido: "pompim"
};

imprimir2(obj);


/////////////////////////////////////
/// funcion como parametro////////
////////////////////////////////////
function imprimir3( fn){
	fn();
}


imprimir3( function() {
	console.log("funcion como parametro(fucnion anonima)");
})

var paramFuncion = function(){
	console.log("paramFuncion");
}

/******************************************************************/
console.log("****************Retorno de las funciones*******************");

function obtenerAleatorio(){

	// ver  por consola window.Math
	return Math.random();
}

function obtenerNombre(){
	return "Juan";
}

function esMayor05(){

	if(obtenerAleatorio() > 0.5)
		return true;
	else
		return false;
}

// retorna un object
function crearPersona(nombre, apellido){

	return {
		nombre: nombre,
		apellido: apellido
	};
}

// retorna una funcion
function crearFuncion(){

	return function(){
		console.log("Me crearon!");
	}
}

function crearFuncion2(){

	return function(nombre){
		console.log("Me creo! " + nombre );
	}
}

function crearFuncion3(){

	return function(nombre){

		console.log("me creo" + nombre)

		return function(){
			console.log("Segunda funcion");
		}

	}	
}



console.log( obtenerAleatorio() + 10);
console.log( obtenerNombre() + " Padilla");

var nombre = obtenerNombre();

if ( esMayor05 )
  	console.log("es mayor que 0.5");
else
	console.log("Es menor que 0.5");


var persona = crearPersona("Maria","Paz");

console.log(persona);
console.log(persona.nombre);


var nuevaFuncion = crearFuncion();
nuevaFuncion();

var nuevaFuncion2 = crearFuncion2();
nuevaFuncion2(persona.nombre);


var nuevaFuncion3 = crearFuncion3();
var segundFuncion = nuevaFuncion3( persona.nombre) 
segundFuncion();

