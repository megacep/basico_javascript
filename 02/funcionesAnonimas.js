console.log("******************funciones anonimas******************");

// invocacion funcion anonima
// con esto lo que hago es despegar todo del objecto window
// con esto se evita  quilombos cuando se tiene varios archivos js
// cada funcion anonima va a manter su variables para ella
( function(){

	var a = 120;
	console.log(a);

	function cambiarA(){
		a = 20;
	}

	cambiarA();

	console.log(a);

}) () ; // los dos parentisis finales son para invocar a la funcion


/****************************************************/

function ejecutarFuncion(fn){
	if( fn() ===1){
		return true;
	}
	else 
		return false;
};


console.log(
	ejecutarFuncion( function(){
		console.log("funcion anonima ejecutada");
		return 1;
		})

);
