console.log("********** funciones y su contexto *************");

function crearFunciones(){
	// lo que esta dentro de la llaves es el contexto de la funcion
	// como todo lenguaje

	var arr = [];
	var numero = 1;

	arr.push( function(){
		console.log(numero);
	});

	numero = 2;

	arr.push( function(){
		console.log(numero);
	});

	numero = 3;

	arr.push( function(){
		console.log(numero);
	});	

	return arr;
}

// arreglando crearFunciones para que no devuelva siempre la utlima asigancion a numero
function crearFunciones2(){	

	var arr = [];
	var numero = 1;

	for( var numero = 1 ; numero <= 3 ; numero++)
	{
		arr.push( 

			(function(numero){

				return function(){
					console.log(numero);
				};

			})(numero) // ->(numero) es la llamda a la funcion anonima (function(numero){})		
		);

	}
	return arr;
}




var funciones = crearFunciones();
var funciones2 = crearFunciones2();

// al ser invocada ve que en crearFunciones el ultimo valor asigando a numero es 3,
// por devuelve este en todas las invocaciones
funciones[0]();
funciones[1]();
funciones[2]();


funciones2[0]();
funciones2[1]();
funciones2[2]();

