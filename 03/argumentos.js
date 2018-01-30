console.log("************ argumentos ************");


var arguments = 10;

// todas la funciones tienen su prototipos
// poner en la consola de chrome:
// miFuncion.prototype
function miFuncion(a,b,c,d){
	// arguments esta definida en el contexto de la funcion por eso no toma 
	// argument global

	console.log( arguments);
	// arguments refiere a los arguemento con que se llamo a la funcion
};

function miFuncion2(){
	// arguments es un array
	console.log( arguments);
}

function miFuncion3(a,b,c,d){

	if( arguments.length != 4  ){
		console.error("la funcion necesita 4 parametros");
		alert("pasa todos los parametros cat !!");
		return;
	}
	console.log( a + b + c + d );


}



miFuncion(10);

miFuncion2(15,"mocoloco", "javascript es refumado", {}, function(){} );

miFuncion3(20,20,3);
miFuncion3(20,20,3,5);
